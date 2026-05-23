# PowerShell 脚本：将 Private Key 文件编码为 Base64
# 使用方法：.\encode-private-key.ps1 -KeyPath "你的私钥文件路径.pem"

param(
    [Parameter(Mandatory=$true)]
    [string]$KeyPath
)

if (-not (Test-Path $KeyPath)) {
    Write-Error "文件不存在: $KeyPath"
    exit 1
}

$privateKey = Get-Content -Path $KeyPath -Raw
$bytes = [System.Text.Encoding]::UTF8.GetBytes($privateKey)
$base64 = [System.Convert]::ToBase64String($bytes)

Write-Output "Base64 编码的 Private Key:"
Write-Output "=========================="
Write-Output $base64
Write-Output "=========================="
Write-Output ""
Write-Output "请将上述内容添加到 .env.local 文件中："
Write-Output "GITHUB_PRIVATE_KEY=$base64"