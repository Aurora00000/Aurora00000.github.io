# 个人主页修改与发布流程

这份文档用于日常维护 Jing Qu 的 GitHub Pages 个人主页。

- 网站地址：<https://Aurora00000.github.io/>
- GitHub 仓库：<https://github.com/Aurora00000/Aurora00000.github.io>
- 本地目录：`F:\实验室数据\个人主页`
- 发布分支：`main`
- GitHub Pages 来源：`main` 分支的根目录 `/ (root)`

## 一、每次修改的标准流程

建议始终在本地目录修改，再统一上传。不要在 GitHub 网页和本地同时修改同一个文件。

### 第 1 步：打开项目

打开 PowerShell，输入：

```powershell
cd "F:\实验室数据\个人主页"
```

然后用 VS Code 或其他文本编辑器打开这个文件夹。

### 第 2 步：修改对应文件

根据要修改的内容，在下面的“常用文件位置”中找到对应文件。保存文件时保持 UTF-8 编码。

### 第 3 步：检查修改

在 PowerShell 中设置 Git 路径：

```powershell
$gitExe = "C:\Users\19135\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe"
```

查看修改了哪些文件：

```powershell
& $gitExe status
```

查看具体修改内容：

```powershell
& $gitExe diff
```

检查是否有明显的空格或格式错误：

```powershell
& $gitExe diff --check
```

如果最后一个命令没有输出，通常表示检查通过。

### 第 4 步：提交修改

```powershell
& $gitExe add .
& $gitExe commit -m "Update homepage"
```

提交说明可以换成更具体的英文，例如：

```powershell
& $gitExe commit -m "Add new publication"
& $gitExe commit -m "Update honors and awards"
& $gitExe commit -m "Replace profile photo"
```

如果出现 `nothing to commit`，表示没有检测到新修改，或者修改已经提交过。

### 第 5 步：上传到 GitHub

```powershell
& $gitExe push origin main
```

出现类似下面的内容表示上传成功：

```text
main -> main
```

### 第 6 步：等待并检查网站

等待约 1 到 3 分钟，然后打开：

<https://Aurora00000.github.io/>

如果页面仍然是旧版，按 `Ctrl + F5` 强制刷新。也可以打开无痕窗口重新查看。

需要检查的页面：

- 首页：<https://Aurora00000.github.io/>
- Publications：<https://Aurora00000.github.io/publications/>
- Honors：<https://Aurora00000.github.io/honors/>
- Service：<https://Aurora00000.github.io/service/>
- CV：<https://Aurora00000.github.io/cv/>

## 二、常用文件位置

| 想修改的内容 | 文件位置 |
| --- | --- |
| 首页简介、研究方向、News、教育、首页荣誉和服务 | `_pages/about.md` |
| 论文卡片数据 | `_data/publications.yml` |
| 论文图片 | `images/publications/` |
| 完整 Publications 页面说明 | `_pages/publications.html` |
| Honors and Awards 独立页面 | `_pages/honors.md` |
| Service and Leadership 独立页面 | `_pages/service.md` |
| CV 页面 | `_pages/cv.md` |
| 左侧姓名、简介、单位和学术链接 | `_config.yml` |
| 左侧头像 | `images/profile.png` |
| 顶部导航栏 | `_data/navigation.yml` |
| 首页和论文卡片样式 | `_sass/layout/_jing-home.scss` |
| 中英文切换、论文筛选 | `assets/js/jing-home.js` |

普通内容更新只需要改 Markdown、YAML 和图片。没有必要修改 SCSS 或 JavaScript。

## 三、修改首页简介和科研数字

编辑 `_pages/about.md`。

英文简介位于：

```html
<div class="i18n-en">
```

中文简介位于：

```html
<div class="i18n-zh">
```

修改时建议中英文同步更新。

首页四个科研数字位于：

```html
<div class="home-metrics">
```

例如论文总数由 22 变成 23，需要同时检查：

1. `_pages/about.md` 中的中英文简介和 `home-metrics`。
2. `_pages/publications.html` 中的“已链接记录数 / 总成果数”说明。
3. `_pages/cv.md` 中的 Research Output。
4. `_data/publications.yml` 是否已经加入新论文。

注意：论文卡片数量来自 `_data/publications.yml`，会自动计算；“总论文数、第一作者数、共同第一作者数”等个人统计不会自动计算，需要手动同步。

## 四、新增一篇论文

### 第 1 步：准备论文图片

优先使用论文中的图形摘要、系统框架图、Figure 1，或作者单位发布的官方图片。

把图片放入：

```text
images/publications/
```

文件名建议只使用小写英文字母、数字和短横线，例如：

```text
new-rehabilitation-system.jpg
```

建议使用 JPG 或 PNG，单张图片尽量小于 2 MB。不要给论文配与正文无关的图片。

### 第 2 步：添加论文数据

编辑 `_data/publications.yml`，把新论文放到对应年份，较新的论文放在上面。

复制下面的模板：

```yaml
- year: '2026'
  title: '完整论文标题'
  short_venue: '期刊或会议简称 2026'
  topic: 'VR / AR'
  image: '/images/publications/new-rehabilitation-system.jpg'
  first_author: true
  venue: '完整期刊或会议名称'
  paperurl: 'https://doi.org/10.xxxx/xxxxx'
  authors_html: '<strong>Jing Qu</strong>, Author B, Author C'
  selected: false
```

字段说明：

- `year`：发表年份。
- `title`：完整标题。
- `short_venue`：显示在论文图片左上角的短标签。
- `topic`：用于筛选按钮，只使用现有分类。
- `image`：论文图片路径；没有可靠图片时可以删掉这一行，页面会显示题名预览。
- `first_author`：实际为第一作者时写 `true`，否则删除这一行或写 `false`。
- `venue`：完整期刊或会议名称。
- `paperurl`：优先填写 DOI 链接。
- `authors_html`：把自己的姓名放入 `<strong>` 标签中。
- `selected`：设为 `true` 时进入 Selected Publications，否则进入 More Publications。

现有 `topic` 分类：

```text
VR / AR
Brain Signals
Rehabilitation
Design Methods
```

### 第 3 步：标记共同第一作者

只有论文正文或正式报道明确说明贡献相同时，才添加共同一作符号：

```yaml
authors_html: 'Author A<sup>*</sup>, <strong>Jing Qu<sup>*</sup></strong>, Author C'
```

页面会自动显示 Equal Contribution 标签。不要只给自己的姓名加星号，共同一作作者都应标记。

### 第 4 步：检查论文卡片

发布后检查：

- 标题、作者顺序和期刊名称是否正确。
- DOI 是否能打开。
- 图片是否属于该论文。
- 自己的姓名是否加粗。
- 第一作者、共同一作和主题筛选是否正确。
- 首页 News 是否自动出现该论文。

## 五、更新 News

论文 News 会根据 `_data/publications.yml` 自动生成，不需要重复添加。

获奖、报告、入学或其他消息需要在 `_pages/about.md` 的下面位置手动添加：

```html
<div class="news-feed">
```

模板：

```html
<article class="news-feed-item">
  <time datetime="2026">2026</time>
  <p><span class="i18n-en-inline">English news text.</span><span class="i18n-zh-inline">中文动态内容。</span></p>
</article>
```

如果知道准确日期，可以把 `datetime` 和显示文字改成 `2026-10-12`；如果只确定年份，就只写年份。

## 六、更新荣誉和奖励

荣誉信息通常需要修改两个位置：

1. `_pages/about.md`：首页显示代表性荣誉。
2. `_pages/honors.md`：独立页面显示完整信息。

新增荣誉时写清：

- 荣誉或奖项的正式名称。
- 级别，例如国家级、省部级或校级。
- 获奖等级，例如一等奖、三等奖或亚军。
- 年份。
- “推荐申报”不能写成“获批”或“入选”。

整体数量变化时，还要同步修改 `_pages/cv.md`。

## 七、更新审稿、学术报告和任职

修改：

- 首页摘要：`_pages/about.md` 中的 `id="services"`。
- 完整页面：`_pages/service.md`。
- CV：`_pages/cv.md` 中的 Service。

期刊审稿示例：

```markdown
- *Journal Name* (Publisher), reviewer, 2026.
```

任职、学术报告和实践服务最好分别放在 Leadership、Academic Exchange、Research and Clinical Service 小节。

## 八、更换头像和左侧信息

### 更换头像

用新的正方形照片替换：

```text
images/profile.png
```

保持文件名不变，就不需要修改配置。

### 修改左侧简介

编辑 `_config.yml` 中的：

```yaml
author:
  name             : "Jing Qu"
  bio              : "Doctoral student researching AI, brain-computer interfaces, and VR/AR rehabilitation"
  employer         : "Shandong University"
```

YAML 中冒号后必须有一个空格，不要使用 Tab 缩进。

## 九、修改顶部导航栏

编辑 `_data/navigation.yml`。

例如：

```yaml
- title: "Honors"
  url: /#honors
```

`/#honors` 对应 `_pages/about.md` 中：

```html
<section class="jing-section" id="honors">
```

导航地址和 `id` 必须完全一致。

## 十、只用 GitHub 网页修改一小段文字

如果只修改一个简单句子，也可以直接在 GitHub 网页操作：

1. 打开仓库中的目标文件。
2. 点击右上角铅笔图标 Edit this file。
3. 修改内容。
4. 点击 Commit changes。
5. 提交到 `main` 分支。
6. 等待 1 到 3 分钟后刷新网站。

不建议用网页一次上传大量文件，也不要在本地尚有未上传修改时同时使用网页编辑。

## 十一、常见问题

### 网站没有更新

依次检查：

1. `git push origin main` 是否成功。
2. GitHub 仓库是否能看到刚才的提交。
3. 等待 1 到 3 分钟。
4. 使用 `Ctrl + F5` 强制刷新。
5. 打开 GitHub 仓库的 Settings → Pages，确认来源仍为 `main` 和 `/ (root)`。

### 论文图片不显示

检查：

- 图片是否确实位于 `images/publications/`。
- `image` 路径是否以 `/images/publications/` 开头。
- 文件名大小写是否完全一致。
- 图片是否已经执行 `git add`、`commit` 和 `push`。

### 页面出现格式错误

重点检查：

- YAML 每个字段的缩进是否一致。
- 英文冒号后是否有空格。
- 引号是否成对。
- HTML 标签是否完整闭合，例如 `<strong>...</strong>`。
- 是否误删文件开头的 `---`。

### Git 提示没有内容可提交

`nothing to commit, working tree clean` 表示当前没有未提交修改，不是错误。

### 想撤销已经发布的一次修改

先查看最近提交：

```powershell
& $gitExe log --oneline -5
```

找到需要撤销的提交编号，然后使用会保留历史的撤销方式：

```powershell
& $gitExe revert 提交编号
& $gitExe push origin main
```

不要使用 `git reset --hard`。

## 十二、发布前检查清单

- [ ] 中英文简介是否同步。
- [ ] 论文标题、作者顺序、年份和 DOI 是否正确。
- [ ] 共同一作是否有正式依据。
- [ ] 图片是否属于对应论文。
- [ ] 总论文数、第一作者数、共同一作数是否同步。
- [ ] Honors、Service 和 CV 是否需要一起修改。
- [ ] 桌面端和手机端文字是否正常换行。
- [ ] `git diff --check` 是否无输出。
- [ ] `git push origin main` 是否成功。
- [ ] 网站强制刷新后是否显示新内容。

## 十三、最简发布命令

确认内容已经修改并保存后，可以依次运行：

```powershell
cd "F:\实验室数据\个人主页"
$gitExe = "C:\Users\19135\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe"
& $gitExe status
& $gitExe diff --check
& $gitExe add .
& $gitExe commit -m "Update homepage"
& $gitExe push origin main
```

完成后等待 1 到 3 分钟，再打开 <https://Aurora00000.github.io/> 检查。
