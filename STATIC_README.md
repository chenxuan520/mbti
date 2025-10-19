# MBTI 性格测试 - 静态版本

这个项目是一个 MBTI 性格测试应用，已经转换成纯前端静态文件，可以使用 nginx 静态服务器部署。

## 项目结构

- `out/` - 构建输出的静态文件目录
- `nginx.conf` - nginx 配置文件

## 构建静态文件

要构建静态版本的应用，请运行以下命令：

```bash
npm run static
```

或者 separately:

```bash
npm run build
npm run export
```

这将创建 `out` 目录，其中包含所有静态文件。

## 部署到 Nginx

### 方法 1: 使用 Docker

```bash
# 构建静态文件
npm run static

# 运行 nginx 容器，将 out 目录映射到容器的 html 目录
docker run -d -p 80:80 --name mbti-app -v $(pwd)/out:/usr/share/nginx/html:ro nginx:alpine
```

### 方法 2: 手动部署

1. 构建静态文件：
   ```bash
   npm run static
   ```

2. 将 `out` 目录中的所有文件复制到 nginx 的静态文件目录（通常是 `/var/www/html` 或 `/usr/share/nginx/html`）

3. 将 `nginx.conf` 的内容配置到你的 nginx 服务器，或者复制 `nginx.conf` 到 nginx 配置目录

4. 重启 nginx 服务：
   ```bash
   sudo systemctl restart nginx
   ```

## 数据存储

此静态版本使用浏览器的 `localStorage` 替代原来的 IndexedDB，用于存储测试结果。这意味着测试数据将保存在用户的浏览器本地，不会发送到服务器。

## 路由

客户端路由通过 URL Hash (#) 实现，nginx 配置已设置 `try_files` 指令确保所有路由都指向 `index.html`，以支持单页应用的路由功能。

## 特性

- 100% 静态，无后端依赖
- 支持客户端路由
- 使用 localStorage 存储测试数据
- 支持 gzip 压缩
- 包含安全头设置
- 静态资源缓存优化