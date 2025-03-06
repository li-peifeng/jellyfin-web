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

![截屏2025-03-06 18 50 17](https://github.com/user-attachments/assets/58a6b74e-28db-455c-a3f3-d897778cfa3c)
![截屏2025-03-06 18 51 08](https://github.com/user-attachments/assets/9efd16f7-c24c-4550-ac36-6fffc0bc682f)
![截屏2025-03-06 18 51 35](https://github.com/user-attachments/assets/98543051-8895-4706-a96e-0f80b11d6cb3)
![截屏2025-03-06 18 51 54](https://github.com/user-attachments/assets/a609271b-e629-4029-a652-01bb64ba4a91)
