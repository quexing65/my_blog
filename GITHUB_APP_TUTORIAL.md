# GitHub App 创建详细教程

## 第一步：进入 GitHub 设置页面

1. 打开浏览器，访问：https://github.com/settings/apps
2. 如果没有登录，请先登录你的 GitHub 账户
3. 你会看到 "GitHub Apps" 页面

## 第二步：创建新的 GitHub App

1. 点击页面上的 **"New GitHub App"** 按钮
2. 进入创建表单页面

## 第三步：填写基本信息

在 "Register new GitHub App" 表单中填写：

### 基本信息
- **GitHub App name**: 输入 `quexing-blog-app`（或你喜欢的名称）
- **Description**: 输入 `My personal blog app`（可选）
- **Homepage URL**: 输入 `https://github.com/quexing/my-blog`

### Webhook 设置
- **Webhook**: **取消勾选** "Active"（我们不需要 Webhook）

## 第四步：设置权限

滚动到 **"Permissions"** 部分：

### Repository permissions（仓库权限）
点击 "Repository permissions" 旁边的下拉菜单，设置：

1. **Contents**: 选择 **"Read and write"**
   - 这允许 App 读取和写入仓库文件
2. **Metadata**: 保持 **"Read-only"**（默认）

### Account permissions（账户权限）
- 保持默认设置即可

## 第五步：创建 App

1. 滚动到页面底部
2. 点击 **"Create GitHub App"** 按钮
3. 系统会提示你确认，点击 "Create" 确认

## 第六步：获取 App ID

创建成功后，你会看到 App 的详细信息页面：

1. 找到 **"App ID"** 字段
2. 记下这个数字（例如：123456）
3. 这是你的 `NEXT_PUBLIC_GITHUB_APP_ID`

## 第七步：生成 Private Key

在同一个页面：

1. 滚动到 **"Private keys"** 部分
2. 点击 **"Generate a private key"** 按钮
3. 浏览器会自动下载一个 `.pem` 文件
4. 保存这个文件到安全位置（例如：`C:\Users\你的用户名\my-blog-app.pem`）

## 第八步：安装 App 到仓库

在 App 页面：

1. 点击左侧菜单的 **"Install App"** 标签
2. 点击 **"Install"** 按钮
3. 选择 **"Only select repositories"**
4. 在下拉菜单中选择 `my-blog` 仓库
   - 如果还没有创建仓库，需要先创建（见下一步）
5. 点击 **"Install"** 按钮确认

## 第九步：创建 GitHub 仓库（如果还没有）

1. 访问：https://github.com/new
2. 填写：
   - **Repository name**: `my-blog`
   - **Description**: `My personal blog`（可选）
   - **Public**: 选择 Public（免费用户需要公开仓库）
3. 点击 **"Create repository"** 按钮

## 第十步：编码 Private Key

Private Key 需要 Base64 编码后才能使用。

### 方法一：使用我提供的脚本

在 PowerShell 中运行：

```powershell
.\encode-private-key.ps1 -KeyPath "C:\Users\你的用户名\my-blog-app.pem"
```

### 方法二：手动编码

1. 用记事本打开 `.pem` 文件
2. 复制全部内容
3. 访问在线 Base64 编码工具：https://www.base64encode.org/
4. 粘贴内容并编码
5. 复制编码后的字符串

## 第十一步：更新环境变量

将获取到的信息更新到 `.env.local` 文件：

```bash
NEXT_PUBLIC_GITHUB_APP_ID=你的App ID
GITHUB_PRIVATE_KEY=你的Base64编码的Private Key
```

## 完成！

现在你可以继续执行下一步任务了。

## 常见问题

### Q: 我找不到 "Developer Settings" 在哪里？
A: 访问 https://github.com/settings/apps 直接进入。

### Q: 我创建 App 后找不到 App ID？
A: 在 App 的详情页面，App ID 会在页面顶部显示。

### Q: Private Key 生成后找不到了？
A: 重新生成一个新的 Private Key 即可。

### Q: 我的仓库还没有创建怎么办？
A: 先创建仓库，然后再安装 App。

## 需要帮助？

如果遇到问题，可以：
1. 查看 GitHub 官方文档：https://docs.github.com/en/apps
2. 在 GitHub 社区提问
3. 告诉我具体遇到了什么问题，我会帮助你解决