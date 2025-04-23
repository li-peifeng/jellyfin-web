<p align="center"><a href="https://peifeng.li"><img width="184px" alt="logo" src="https://is.peifeng.li/logo.png"/></a></p>

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
![截屏2025-03-06 18 50 17](https://github.com/user-attachments/assets/69539693-5fb5-4c77-8085-55ee4e20362e)
![截屏2025-03-06 18 51 08](https://github.com/user-attachments/assets/51215d7d-fa62-4de2-84f0-a5e24830c91d)
![截屏2025-03-06 18 51 35](https://github.com/user-attachments/assets/cd2665bf-3f8d-432b-b9b7-12710ddff92c)
![截屏2025-03-06 18 51 54](https://github.com/user-attachments/assets/8b804e88-78a3-4de7-9a97-0c98c31474e2)
