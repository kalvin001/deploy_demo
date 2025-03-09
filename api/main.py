from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# 允许跨域请求
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 允许所有来源，生产环境中应该更加具体
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/hello")
async def hello_world():
    """返回简单的Hello World消息"""
    return {"message": "Hello World from FastAPI!"}

@app.get("/")
async def root():
    """API根路径重定向到hello接口"""
    return {"message": "Welcome to the Hello World API", "docs": "/docs"} 