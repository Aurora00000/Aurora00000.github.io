# 个人主页后续更新说明

这份说明用于维护你的 GitHub Pages 个人主页：

网站地址：

```text
https://Aurora00000.github.io/
```

本地项目目录：

```text
F:\实验室数据\个人主页
```

## 一、最常用的修改位置

### 1. 修改首页文字

编辑：

```text
_pages/about.md
```

这里控制新版单页首页的主体内容，包括：

- About / 个人简介
- Research / 研究方向
- News / 最新动态
- Selected Publications / 代表性论文
- Education / 教育经历
- Service and Leadership / 学术服务
- Honors and Awards / 荣誉奖励
- Links / 学术链接

首页内容同时包含英文和中文。英文内容使用：

```html
class="i18n-en"
```

中文内容使用：

```html
class="i18n-zh"
```

修改一个栏目时，建议同步修改对应的中英文内容。

### 2. 修改左侧个人信息栏

编辑：

```text
_config.yml
```

重点字段：

```yaml
author:
  avatar           : "profile.png"
  name             : "Jing Qu"
  bio              : "..."
  location         :
  employer         : "Shandong University"
  email            : your@email.com
  orcid            : "https://orcid.org/0000-0003-4783-9244"
```

如果暂时不想显示邮箱，就保留为空：

```yaml
email            :
```

### 3. 更换头像

替换这个文件：

```text
images/profile.png
```

建议：

- 使用正方形照片
- 文件名保持 `profile.png`
- 替换后不需要改 `_config.yml`

### 4. 修改顶部导航栏

编辑：

```text
_data/navigation.yml
```

新版导航是页内跳转。例如：

```yaml
- title: "Research"
  url: /#research
```

这里的 `research` 必须与 `_pages/about.md` 中的栏目编号一致：

```html
<section class="jing-section" id="research">
```

## 二、更新 News

首页 News 会从 `_data/publications.yml` 自动读取全部论文，并按年份生成动态时间线。新增或修改论文记录后，News 会一起更新，不需要再手工编辑 `_pages/about.md`。

如果以后要加入论文以外的消息，例如获奖、报告或入职信息，可以在 `_pages/about.md` 的 `id="news"` 栏目中另加一条手写消息。只写已经确认的信息。

## 三、更新 Honors and Awards

编辑：

```text
_pages/honors.md
```

找到：

```markdown
# 🎖 Honors and Awards
```

可以改成类似：

```markdown
- **Scholarships**: xxx Scholarship, xxx Scholarship.
- **Awards**: First Prize, xxx Competition, 2025.
- **Honors**: Outstanding Graduate Student, Shandong University.
```

注意：奖项最好写真实、可核对的信息，不确定的先不要写。

首页还会显示一个简要 Honors 栏目。确认奖项后，也需要在 `_pages/about.md` 中找到 `id="honors"` 的部分并同步更新。

## 四、更新 Service and Leadership

编辑：

```text
_pages/service.md
```

这里可以写：

- 期刊审稿服务
- 会议审稿服务
- 学术组织服务
- 实验室/学生组织管理职责
- 竞赛组织或志愿服务

期刊审稿可以写成：

```markdown
- *International Journal of Human-Computer Studies* (Elsevier), reviewer, 2026.
```

首页也有审稿服务摘要。新增服务后，在 `_pages/about.md` 中找到 `id="services"`，复制一行 `service-item` 并修改年份、角色和期刊名。

## 五、更新精选论文卡片

新版首页和独立论文页都展示精选论文：

```text
_pages/about.md
_pages/publications.html
```

首页中的每篇论文卡片大概长这样：

```html
<article class="jing-paper">
  <div class="jing-paper-media">
    <span class="venue-badge">期刊或会议 2026</span>
    <img src="/images/paper-new-work.jpg" alt="论文图说明" />
  </div>
  <div class="jing-paper-body">
    <h3>论文标题</h3>
    <p class="paper-authors">作者列表</p>
    <p class="i18n-en">English summary.</p>
    <p class="i18n-zh">中文简介。</p>
    <div class="jing-paper-links"><a href="论文 DOI 链接">DOI</a></div>
  </div>
</article>
```

精选论文卡片仍需要在 `_pages/about.md` 和 `_pages/publications.html` 中各维护一次；卡片下方的“更多论文”和完整论文清单会从 `_data/publications.yml` 自动生成。

如果要换论文图：

1. 把图片放到：

```text
images/
```

2. 修改图片路径，例如：

```html
<img src="/images/new-paper-image.jpg" alt="..." />
```

建议图片命名用英文和短横线，例如：

```text
paper-new-work.jpg
```

## 六、更新完整论文列表

主页 News、主页“更多论文”和独立 Publications 页共用的数据表在：

```text
_data/publications.yml
```

每篇论文是一组 YAML 数据。新增论文时，复制其中一组并修改：

```yaml
- year: '2026'
  title: '论文标题'
  venue: '期刊或会议名称'
  paperurl: 'https://doi.org/...'
  authors_html: 'Author A, <strong>Jing Qu</strong>, Author C'
  selected: false
```

把新论文放在对应年份的位置，年份新的排在前面。保存后，三个论文区域都会自动更新。

详细论文元数据还保存在：

```text
_publications
```

每篇论文一个 `.md` 文件，作为档案保留。如果需要新增对应的详细记录，可以复制一个旧文件，然后改：

```yaml
title:
category:
permalink:
excerpt:
date:
venue:
paperurl:
citation:
authors_html:
```

在 `_data/publications.yml` 和详细记录的 `authors_html` 中，请把自己的姓名加粗，例如：

```yaml
authors_html: 'Author A, <strong>Jing Qu</strong>, Author C'
```

如果出版社明确标注两位作者贡献相同，可以用 `*` 标识共同第一作者：

```yaml
authors_html: 'Author A<sup>*</sup>, <strong>Jing Qu<sup>*</sup></strong>, Author C'
```

页面会自动显示说明：`* Equal contribution / 共同第一作者`。只有得到论文或出版社页面确认后才添加这个符号。

如果希望一篇论文出现在首页三张精选论文卡片中，可以在 `_data/publications.yml` 中设为：

```yaml
selected: true
```

`selected: true` 会让该论文不再重复出现在首页“更多论文”列表中，但独立 Publications 页面仍会显示它。精选卡片的标题、图片和简介仍需按“第五节”的方法同步维护。

常用分类：

```yaml
category: manuscripts
```

或：

```yaml
category: conferences
```

`date` 建议用：

```yaml
date: 2026-01-01
```

如果只知道年份，就把月份和日期写成 `01-01`。

## 七、每次修改后如何更新网站

打开 PowerShell，运行：

```powershell
cd "F:\实验室数据\个人主页"

& "C:\Users\19135\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe" status
& "C:\Users\19135\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe" add .
& "C:\Users\19135\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe" commit -m "Update homepage"
& "C:\Users\19135\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe" push
```

然后等待 1-3 分钟，刷新：

```text
https://Aurora00000.github.io/
```

如果页面没变化，按：

```text
Ctrl + F5
```

强制刷新浏览器缓存。

## 八、如何确认是否发布成功

进入 GitHub 仓库：

```text
https://github.com/Aurora00000/Aurora00000.github.io
```

查看：

- `Actions`：看构建是否有红色失败
- `Settings -> Pages`：看是否显示网站已发布

如果构建失败，通常是：

- `_config.yml` 缩进错误
- Markdown 文件头部的 `---` 缺失
- YAML 字段里的冒号 `:` 没有用引号包起来

## 九、常见问题

### 1. GitHub Pages 等很久还是没更新

先等 3-5 分钟，然后按 `Ctrl + F5`。

如果仍然没更新，去 GitHub 的 `Actions` 页面看是否构建失败。

### 2. PowerShell 提示 nothing to commit

意思是没有检测到新修改。确认你是否真的保存了文件。

### 3. commit 写错了怎么办

小问题不用管，下一次继续提交即可。

### 4. 图片不显示

检查图片路径是否写成：

```html
<img src="/images/xxx.jpg" />
```

并确认图片确实在：

```text
images/xxx.jpg
```

### 5. 页面布局乱了

优先检查 `_pages/about.md` 里有没有少写：

```html
</div>
```

论文卡片里每个 `<div>` 都要配套关闭。

## 十、建议维护习惯

- 每次只改一小部分，确认没问题再继续改。
- 图片文件名尽量用英文、数字、短横线。
- 论文和奖项不要写不确定的信息。
- 重要改动前可以先备份对应文件。

## 十一、新版首页样式和功能文件

通常只改内容时，不需要动下面两个文件：

```text
_sass/layout/_jing-home.scss
assets/js/jing-home.js
```

- `_jing-home.scss` 控制颜色、卡片、论文图和手机布局。
- `jing-home.js` 控制中英文切换和右下角返回顶部按钮。

如果只是更新个人简介、论文、动态或服务，优先只改 `_pages/about.md`。
