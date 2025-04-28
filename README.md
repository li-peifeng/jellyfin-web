<p align="center">
  <a href="https://peifeng.li"><img width="184px" alt="logo" src="https://cdn.jsdelivr.net/gh/li-peifeng/cdn/logo.png" />
  </a>
</p>

Jellyfin 前端修改

## 在线使用
可直接在线使用，打开地址后输入你的Jellyfin IP连接到你的 Jellyfin.

[在线使用](https://isweetav.pages.dev/)

## 安装
Docker 部署映射整个 Jellyfin-Web 文件夹

## Docker-compose.yml 示例：

```
services:
  jellyfin:
    image: jellyfin/jellyfin:latest
    restart: always
    container_name: jellyfin
    volumes:
      - '/xxxxxx/jellyfin/dist:/jellyfin/jellyfin-web'
    mem_limit: 4096M
    network_mode: host
```
![截屏2025-03-06 18 50 17](https://cdn.jsdelivr.net/gh/li-peifeng/cdn/jellyfin/img/jellyfin-1.webp)
![截屏2025-03-06 18 51 08](https://cdn.jsdelivr.net/gh/li-peifeng/cdn/jellyfin/img/jellyfin-2.webp)
![截屏2025-03-06 18 51 35](https://cdn.jsdelivr.net/gh/li-peifeng/cdn/jellyfin/img/jellyfin-3.webp)
![截屏2025-03-06 18 51 54](https://cdn.jsdelivr.net/gh/li-peifeng/cdn/jellyfin/img/jellyfin-4.webp)
