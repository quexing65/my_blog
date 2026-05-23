# GitHub App 创建指南

## 步骤 1：创建 GitHub App

1. 访问 GitHub 设置页面：https://github.com/settings/apps
2. 点击 "New GitHub App" 按钮
3. 填写以下信息：
   - **GitHub App name**: `quexing-blog-app`（或你喜欢的名称）
   - **Homepage URL**: `https://github.com/quexing/my-blog`（稍后更新为实际域名）
   - **Webhook**: 取消勾选 "Active"（不需要 Webhook）

## 步骤 2：设置权限

在 "Permissions" 部分，设置以下权限：

### Repository permissions
- **Contents**: Read and write（用于读写仓库文件）
- **Metadata**: Read-only（默认）

### Account permissions
- 保持默认即可

## 步骤 3：创建 App

1. 点击 "Create GitHub App" 按钮
2. 创建完成后，你会看到 App ID，记下这个值

## 步骤 4：生成 Private Key

1. 在 App 页面，滚动到 "Private keys" 部分
2. 点击 "Generate a private key" 按钮
3. 下载 `.pem` 文件，保存到安全位置

## 步骤 5：安装 App 到仓库

1. 在 App 页面，点击 "Install App" 标签
2. 选择你的账户
3. 选择 "Only select repositories"
4. 选择 `my-blog` 仓库（需要先创建）
5. 点击 "Install" 按钮

## 步骤 6：配置环境变量

更新 `.env.local` 文件：

```bash
NEXT_PUBLIC_GITHUB_APP_ID=你的App ID
NEXT_PUBLIC_GITHUB_ENCRYPT_KEY=你的加密密钥
```

## 步骤 7：配置 Private Key

Private Key 需要进行 Base64 编码后存储在环境变量中。

### Windows PowerShell 命令：
```powershell
$privateKey = Get-Content -Path "你的私钥文件路径.pem" -Raw
$bytes = [System.Text.Encoding]::UTF8.GetBytes($privateKey)
$base64 = [System.Convert]::ToBase64String($bytes)
Write-Output $base64
```

将输出的 Base64 字符串添加到 `.env.local` 文件：
```bash
GITHUB_PRIVATE_KEY=你的Base64编码的私钥
```

## 完成

现在你可以继续执行下一步任务了！

## 参考链接

- [GitHub App 官方文档](https://docs.github.com/en/apps/creating-github-apps)
- [YYsuni/2025-blog-public README](https://github.com/YYsuni/2025-blog-public#readme)