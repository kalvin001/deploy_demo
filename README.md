# Hello World Demo

这是一个简单的Hello World演示项目，包括Python FastAPI后端和HTML/JS前端。项目设置为可以直接部署到Vercel。

## 项目结构

```
deploy_demo/
├── api/                  # 后端API代码
│   └── main.py           # FastAPI应用
├── frontend/             # 前端代码
│   └── index.html        # 主页面
├── requirements.txt      # Python依赖
└── vercel.json           # Vercel配置文件
```

## 本地开发

### 设置环境

1. 创建Python虚拟环境:
   ```
   python -m venv deploy_demo_env
   ```

2. 激活虚拟环境:
   - Windows: `.\deploy_demo_env\Scripts\activate`
   - macOS/Linux: `source deploy_demo_env/bin/activate`

3. 安装依赖:
   ```
   pip install -r requirements.txt
   ```

### 运行API服务

```
uvicorn api.main:app --reload
```

API将在 http://localhost:8000 上运行。

## Vercel部署

1. 安装Vercel CLI:
   ```
   npm install -g vercel
   ```

2. 登录Vercel:
   ```
   vercel login
   ```

3. 部署:
   ```
   vercel
   ```

## API端点

- `GET /` - 欢迎消息
- `GET /api/hello` - 返回Hello World消息
- `GET /docs` - API文档 

## 部署到Vercel的步骤

### 方法一：通过Git仓库部署（推荐）

1. **将代码推送到Git仓库**：
   ```
   git init
   git add .
   git commit -m "初始提交"
   git remote add origin 您的仓库地址
   git push -u origin main
   ```

2. **在Vercel上部署**：
   - 访问 [Vercel官网](https://vercel.com/) 并登录（如果没有账号请先注册）
   - 点击"Add New..."→"Project"
   - 导入您刚刚推送的Git仓库
   - Vercel会自动检测这是一个Python项目，并应用适当的设置
   - 点击"Deploy"开始部署

### 方法二：使用Vercel CLI直接部署

1. **安装Vercel CLI**（需要先安装Node.js）：
   ```
   npm install -g vercel
   ```

2. **登录Vercel**：
   ```
   vercel login
   ```

3. **在项目根目录执行部署命令**：
   ```
   vercel
   ```
   
4. **按照提示操作**：
   - 如果是首次部署，CLI会询问一些配置问题
   - 确认项目设置
   - 选择要部署的范围（个人或团队）
   - 部署完成后，CLI会提供您项目的URL

## 部署注意事项

1. **确保文件结构正确**：
   - 您的项目已经有了正确的`vercel.json`配置文件
   - 确保API路径和前端文件路径与配置匹配

2. **检查依赖**：
   - `requirements.txt`中已包含必要的依赖

3. **首次访问可能较慢**：
   - Vercel的冷启动可能需要几秒钟，这是正常的

4. **查看部署日志**：
   - 如果部署失败，Vercel会提供详细日志帮助排查问题

## 部署后验证

一旦部署完成，Vercel会提供一个URL（通常是`项目名-用户名.vercel.app`）。访问以下路径验证部署是否成功：

- 访问根路径(`/`)应该显示您的前端页面
- 访问`/api/hello`应该返回JSON数据：`{"message": "Hello World from FastAPI!"}`
- 访问`/docs`查看API文档

## 可能遇到的问题及解决方案

1. **CORS错误**：如果前端无法访问API，可能是CORS配置问题。您的代码已经配置了CORS，应该不会有此问题。

2. **依赖问题**：如果部署失败，可能是依赖版本冲突。您可以尝试在`requirements.txt`中指定更精确的版本。

3. **Python版本问题**：Vercel默认使用Python 3.9。如果您的代码需要特定版本，可以在`vercel.json`中添加配置。

您的项目已经很好地配置了Vercel部署所需的文件，应该可以顺利部署。如果您在部署过程中遇到任何问题，请告诉我，我会帮您解决！