# :::::学校后台管理:::::

## 路由路径

学校管理类API路由前缀:
```
${API_ENDPOINT}/school_management/
```

## 鉴权

学校管理后台允许用户类型为```SystemAdmin``` 或 ```SchoolAdmin``` 用户登陆。

```SystemAdmin``` 登陆前。需要先在系统后台管理->系统管理员管理->配置学校接口安排所需访问的学校后，才允许访问这一类接口。
