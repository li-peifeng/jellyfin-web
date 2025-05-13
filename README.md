<p align="center">
  <a href="https://peifeng.li"><img width="184px" alt="logo" src="https://raw.githubusercontent.com/li-peifeng/li-peifeng.github.io/refs/heads/main/logo.png" />
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
![jellyfin-4](https://github.com/user-attachments/assets/45e104dc-c368-4349-a0bb-dd0e8c74d2d9)
![jellyfin-3](https://github.com/user-attachments/assets/e441e5f1-4542-4bbb-9711-c56e5fec75ef)
![jellyfin-2](https://github.com/user-attachments/assets/f18c4847-537c-42ea-a227-13d7e0c7deae)
![jellyfin-1](https://github.com/user-attachments/assets/401d7634-6e83-42b3-86c7-7caa09c03a53)
