# 设备信息

## 获取基础信息

获取设备学校，班级，教室，卡片集合以及功能配置等初始化信息

```
GET ${API_ENDPOINT}/device/base
```
**响应字段**

| 字段名 | 描述 |
| -- | -- |
| TBD | TBD |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
  "serial_no": "AC4005587578",
  "school": {
    "id": 2,
    "name": "越秀路小学",
    "badge_url": null
  },
  "homeroom": {
    "id": 3,
    "name": "初一（3）班",
    "teachers": [{
      "id": 13,
      "name": "高越彬",
      "avatar_url": "https://cdn.com/image.png"}
    ],
    "honor": false,
    "honor_image_url": null,
    "honor_events": []
  },
  "classroom":{
    "schedules":[
      {
        "date": "2016-08-29",
        "wday_text": "星期一",
        "schedules":
        [
          {
            "sequence": 1,
            "current": false,
            "course_time": {
              "start_at": "2016-08-29T09:00:00+08:00",
              "end_at": "2016-08-29T09:30:00+08:00",
              "start_time": "09:00",
              "end_time": "09:30"},
            "attendance_time": {
              "start_at": "2016-08-29T08:45:00+08:00",
              "end_at": "2016-08-29T09:30:00+08:00"
            },
            "course_id": null,
            "course_subject": null,
            "course_type": null,
            "attendance": false,
            "teacher": {
              "id": null,
              "avatar": null,
              "name": null
            }
          }
          ...
        ]
      }
      ...
    ]
  },
  "card_stack": {
    "features": false,
    "photo_albums": false,
    "praises": false,
    "feeds": false,
    "feed_categories": [],
    "notifications": false,
    "classroom_schedule": false,
    "client_notis": false,
    "external_sections": [],
    "attendance": false,
    "memo": false
  },
  "capabilities": {
    "authorization": {
      "card": false,
      "facial_recog": false,
      "facial_recog_extensions": []
      },
    "school_feature": {
      "memo": false,
      "attendance": false,
      "attendance_extensions": [
        {
          "school_arrival_start_at": null,
          "school_arrival_end_at": null,
          "school_depart_start_at": null,
          "school_depart_end_at": null
        }
      ]
    }
  }
}
```

失败响应:

```
Status: 404 Not Found
```

```json
{
  "error_code": 1006
  "message": "当前卡未绑定学生"
}
```
