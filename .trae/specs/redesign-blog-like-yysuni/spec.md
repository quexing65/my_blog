# 重新设计博客 - 参考 yysuni.com 风格

## 为什么
当前博客设计较为普通，用户希望参考 https://www.yysuni.com/ 和 https://github.com/YYsuni/2025-blog-public 的独特卡片式布局风格，打造一个更具个性和创意的个人博客。

## 有什么变化
- **BREAKING**: 重新设计首页布局，采用卡片式设计
- 添加模糊气泡背景效果
- 实现卡片入场动画（使用 motion 库）
- 创建导航卡片组件
- 添加音乐播放器组件
- 实现响应式布局（桌面端卡片式，移动端列表式）
- 添加配置系统（通过界面配置内容）
- 支持拖拽调整卡片位置（可选）

## 影响
- 受影响的规范：首页布局、全局样式、组件系统
- 受影响的代码：
  - `src/app/page.tsx` - 首页
  - `src/app/layout.tsx` - 全局布局
  - `src/components/` - 组件目录
  - `src/styles/` - 样式文件

## ADDED Requirements

### Requirement: 卡片式首页布局
系统 SHALL 提供卡片式首页布局，包含以下卡片组件：
- HiCard - 打招呼卡片（显示头像和问候语）
- ArtCard - 艺术卡片（显示精选图片）
- ClockCard - 时钟卡片（显示当前时间）
- SocialButtons - 社交按钮
- ArticleCard - 最新文章卡片
- ShareCard - 分享卡片

#### Scenario: 桌面端显示
- **WHEN** 用户在桌面端访问首页
- **THEN** 卡片以绝对定位方式排列，支持动画入场效果

#### Scenario: 移动端显示
- **WHEN** 用户在移动端访问首页
- **THEN** 卡片以垂直列表方式排列

### Requirement: 模糊气泡背景
系统 SHALL 提供模糊气泡背景效果，增加视觉层次感。

#### Scenario: 背景渲染
- **WHEN** 页面加载
- **THEN** 显示多个模糊的彩色气泡作为背景

### Requirement: 卡片入场动画
系统 SHALL 为卡片提供流畅的入场动画效果。

#### Scenario: 动画播放
- **WHEN** 页面加载完成
- **THEN** 卡片按照顺序依次以缩放和淡入方式出现

### Requirement: 导航卡片
系统 SHALL 提供固定在页面上的导航卡片，包含：
- 首页链接
- 博客链接
- 项目链接
- 关于链接

#### Scenario: 导航显示
- **WHEN** 用户访问任意页面
- **THEN** 导航卡片固定显示在适当位置

### Requirement: 音乐播放器
系统 SHALL 提供音乐播放器组件，支持：
- 显示当前播放歌曲
- 播放/暂停控制
- 歌曲切换

#### Scenario: 音乐播放
- **WHEN** 用户点击播放按钮
- **THEN** 开始播放音乐并显示播放状态

### Requirement: 响应式设计
系统 SHALL 根据屏幕尺寸自动调整布局。

#### Scenario: 桌面端布局
- **WHEN** 屏幕宽度大于 640px
- **THEN** 使用卡片式绝对定位布局

#### Scenario: 移动端布局
- **WHEN** 屏幕宽度小于等于 640px
- **THEN** 使用垂直列表布局

## MODIFIED Requirements

### Requirement: 全局样式
更新全局样式以支持卡片式设计：
- 添加卡片基础样式（圆角、阴影、模糊背景）
- 添加动画关键帧
- 更新颜色变量

## REMOVED Requirements

### Requirement: 旧版首页布局
**Reason**: 替换为卡片式布局
**Migration**: 删除旧版首页组件，创建新的卡片组件