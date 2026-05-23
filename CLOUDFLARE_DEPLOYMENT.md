# Cloudflare Pages 部署指南

## 域名信息
- **域名**: quexing.de
- **GitHub 仓库**: quexing/my_blog

## 第一步：推送代码到 GitHub

在 PowerShell 中运行以下命令：

```powershell
# 初始化 Git 仓库（如果还没有）
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit from 2025-blog-public"

# 添加远程仓库
git remote add origin https://github.com/quexing/my_blog.git

# 推送代码
git push -u origin main
```

## 第二步：创建 Cloudflare Pages 项目

1. 登录 Cloudflare Dashboard: https://dash.cloudflare.com/
2. 在左侧菜单选择 "Workers & Pages"
3. 点击 "Create application"
4. 选择 "Pages" 标签
5. 点击 "Connect to Git"

## 第三步：连接 GitHub 仓库

1. 选择 "GitHub" 作为 Git 提供商
2. 授权 Cloudflare 访问你的 GitHub 账户
3. 选择 `quexing/my_blog` 仓库
4. 点击 "Begin setup"

## 第四步：配置构建设置

在 "Set up builds and deployments" 页面填写：

### 构建设置
- **Production branch**: `main`
- **Framework preset**: `Next.js (Static HTML Export)`
- **Build command**: `npm run build`
- **Build output directory**: `.next`

### 环境变量
点击 "Add variable" 添加以下环境变量：

| 变量名 | 值 |
|--------|-----|
| `NEXT_PUBLIC_GITHUB_OWNER` | `quexing` |
| `NEXT_PUBLIC_GITHUB_REPO` | `my_blog` |
| `NEXT_PUBLIC_GITHUB_BRANCH` | `main` |
| `NEXT_PUBLIC_GITHUB_APP_ID` | `3828167` |
| `NEXT_PUBLIC_GITHUB_ENCRYPT_KEY` | `LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFb2dJQkFBS0NBUUVBbElOcnl1RjN4SE5ob2RqTy81MjhOVXltQitJQThianZWRG40c3dFNXdQRUJXZytyCitNQmE3cHlCa2JHcjZOaTR6NkE1TS9hcHJYNVAyVHJPakhleVc4MkQ0V0JSSjBwMkdnN3Btck90eG5hMk9DamUKZzJLbVFmU1pXR3NoRDkzZUhSRUlzUERDTERBODNuRS93Z3NuSHpwUGVHOGJnelZPWXZuSTAyQlpSSWcxdlRpbQowSk5jNlEzeXpSaU1pdjFPbDRQQXRyWERwd2NWVE04d1h2SmNaVnZobTB3VW9tV0tBemVaQ3RNRk10dEVPVXh6CjFRQm9heFowOGc3ZVVzSW5lYks3WExiSUNtK3pyZGJPb21OeWc4eCtENk5jaUlWR1IxaUlnTFVGRzI1OHljZWEKeExSeDJmMHZQVWlBbENJUXF6Y2RuVzhNWXNMSkVuRjEzK3JIQndJREFRQUJBb0lCQUNXWG9waG5QQmJKRWdTUwp5Y3JnVlh5MFd5NlJvYVdPSjE2TmtndFZteFhncTNQdGxaMVFxM1BNdit0dUt0SzAwUXNWUm9XRndXdCtGcDRwCkNaRjYxdlh2N3BzRTgyWGJya3RvVE85dzNlTG50N1k5ZWgyTndnSGQ5VmJ4UHh3eUVBQVJpTDZwSXExbXhIR1YKL3dxU0lpUUFjWTlOcUl3czJSdXFtSkFReW1mVEkvZUFVQXppUU5ON1EzUllNei9NeWh4UjliOWVYUzFFVzR0VApKekpZWk5IQXkvVEJRZ21WbVlXWkR1TG9SajNxcFk0NmV4K0trRjNaUFdzWTdzN2RpTzZPdjlXSUJHK2FkcVZTCjNnZ3lEei9TN1RKc0ZSQ1N3WHluTDBuSFdWMjdBWTIrL0xrRTB3ZUx5Vy9jd3Bhd1huSUwrNDBsTjdjUjYvSzMKc3BnNzk3a0NnWUVBeE82S3hneGFkamYrMDJDVlU3bk8yanhRYW40L05yUk0yRVVLV3h5bVg5TVdPVjh5WUpZMwpiNmF4YXhzcHZCZ0xPTkExU0JpNGUxSWhOUnFFVTNwMmUrc3RBM2c5eDJscEttbG56MHZaZzdHaU9aTHFuN1ZICmZYSFpkNnNlRnRnWHJ1KzdQZGZOYzVQUDRmY0h6MndTU1VZRFFycWJrQUZmeG4wZFpoaDNDdzBDZ1lFQXdROE8Kak9nTTdMYlVTQ2VkU3U4bVRzOElDS2VhSE5zL1Q0bkJyVWhhT2t2NFlPNUtGZWRkZWpESCtVQ05pV1FocENoUwpmRllFdks1a0szdG9RUTEzK25GNERoYys5cXAwdTAwRmNBbE0rRkE1eHJvbTJpcWlrY1Evb0VaSGJGc2hITEo4CjZvZE9PMlRyaitveXcvWUlNeUp2LzlmdlM5dW96dkF5YWszRFJXTUNnWUJHTmw1WCtqT09qcXhXSk10WXpKaUoKaXBPSlJIVzVSVk5Za0ZUKzR4b1dkQ1lxVWx5ZHZ6RUlwNy85MWZOdFVvMDl0azRvNUZkeDhIaFNmSi9OTzQ1ZQo1QnhxYmtab2dKYTBQbHg2dGlwWkg4NGRCTnFPRW8zb2xkelpJN05ZcGJiYjhqRXAvWFVNemhpQ0VoZEF4dUZHCktxWWk5bkZjU0lFalBaeHJ1REZKU1FLQmdEYy9tdGRpTlFpdERiVVVlU1FQcW5QVk5hUmNhbk1sbjBtZ3o2ZEsKVkYvb2k4MFpoR1FlVVJiOXpNeWMxNlJnM211L0NsUUF2ZHhOUCtkZHFxa3JOSkdjVlZJYS91N1NPeE82NS9wMgovdXIwOG9QWGsvVE5UTGJRWmJEMVM4MUxpdjlPYVFjbzc0OTV3eHZ0VnRmVG1lY2dUTkwzdGNpTXRSTjdrOEh1ClBScW5Bb0dBRmlWYWdKbVd0SlBMOUEvN2pTeFlsd3VHeW44enF5MjFSTXFTZ0o3bXdiYWUxemdLVWloSDZVNWQKRUt5QWI4M1p1Q3Z6bi9hL1RnL1Ayc1pwK25sU3FuUFVRamx2TllDWWVvcys3ZmtyckRFMUlCcU5GQ2dlTm9DMApWLzA2WlhtY2x6aUZHM09ObmZmSHpoUklXVlN0U3hvSHJPRGhHK3Z3SXpRQTJ2aU9WRlE9Ci0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0t` |

5. 点击 "Save and Deploy"

## 第五步：等待部署完成

1. Cloudflare Pages 会自动构建和部署你的项目
2. 部署完成后，你会看到一个 `.pages.dev` 域名
3. 访问这个域名查看你的博客

## 第六步：配置自定义域名

1. 在 Cloudflare Pages 项目页面，点击 "Custom domains" 标签
2. 点击 "Set up a custom domain"
3. 输入你的域名: `quexing.de`
4. 点击 "Continue"

## 第七步：配置 DNS

### 方法一：使用 Cloudflare DNS（推荐）

如果你的域名使用 Cloudflare DNS：

1. 在 Cloudflare Dashboard 中选择你的域名 `quexing.de`
2. 点击 "DNS" 标签
3. 添加以下记录：

| 类型 | 名称 | 内容 | 代理状态 |
|------|------|------|----------|
| CNAME | `@` | `my_blog.pages.dev` | 已代理 |
| CNAME | `www` | `my_blog.pages.dev` | 已代理 |

4. 点击 "Save"

### 方法二：使用其他 DNS 提供商

如果你的域名使用其他 DNS 提供商：

1. 登录你的 DNS 管理面板
2. 添加以下记录：

| 类型 | 名称 | 内容 |
|------|------|------|
| CNAME | `@` | `my_blog.pages.dev` |
| CNAME | `www` | `my_blog.pages.dev` |

## 第八步：等待 DNS 生效

1. DNS 记录可能需要几分钟到几小时才能生效
2. 你可以在 https://dnschecker.org/ 检查 DNS 是否生效
3. 生效后，访问 https://quexing.de 查看你的博客

## 第九步：验证 HTTPS

1. Cloudflare 会自动为你的域名配置 HTTPS 证书
2. 访问 https://quexing.de 确认 HTTPS 正常工作
3. 如果遇到问题，可以在 Cloudflare 的 "SSL/TLS" 设置中调整加密模式

## 完成！

你的博客现在应该可以通过 https://quexing.de 访问了！

## 常见问题

### Q: 部署失败怎么办？
A: 检查构建日志，通常是环境变量配置错误或依赖安装失败。

### Q: 域名无法访问怎么办？
A: 检查 DNS 记录是否正确，等待 DNS 生效（可能需要几小时）。

### Q: HTTPS 证书问题？
A: 在 Cloudflare 的 "SSL/TLS" 设置中，将加密模式设置为 "Full (strict)"。

### Q: 如何更新博客内容？
A: 通过 GitHub App 在管理界面修改内容，然后推送到 GitHub，Cloudflare Pages 会自动重新部署。

## 参考链接

- [Cloudflare Pages 官方文档](https://developers.cloudflare.com/pages/)
- [Cloudflare DNS 文档](https://developers.cloudflare.com/dns/)
- [YYsuni/2025-blog-public README](https://github.com/YYsuni/2025-blog-public#readme)