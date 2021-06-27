# TeamPBCN发布站

此repo专用于TeamPB发布作品

## 如何本地预览

1. 安装`Ruby`
2. 配置`Gem`源
3. 安装`jekyll`和`bundler`
4. 配置`bundler`源
5. 进入`项目目录`，执行`bundle`命令
6. 执行`bundle exec jekyll serve`命令
7. 打开[浏览器页面](http://localhost:4000/)
8. 在`_posts`下添加`yyyy-MM-dd-标题.md`形式的页面

```shell
# 配置Gem源
gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/

# 配置bundler源
bundle config mirror.https://rubygems.org https://gems.ruby-china.com
```
