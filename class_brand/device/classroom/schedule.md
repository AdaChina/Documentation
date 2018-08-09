# 教室课程表

## 获取每日课程表

提供节次，每日节次课程信息，以及课程考勤信息。默认返回当天及前后3天，共7天的课程表。

```
GET ${API_ENDPOINT}/classroom/schedules/daily
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| from_date | integer | 否 | 开始日期 | 2000-01-20 |
| to_date | string | 否 | 结束日期 | 2000-02-01 |


```json
[
  {
    "date": "2016-09-01",
    "wday_text": "星期四",
    "schedules":
      [
        {
          "sequence": 1,
          "current": false,
          "course_time": {
            "start_at": "2016-09-01T09:00:00+08:00",
            "end_at": "2016-09-01T09:30:00+08:00",
            "start_time": "09:00",
            "end_time": "09:30"
            },
          "attendance_time": {
            "start_at": "2016-09-01T08:45:00+08:00",
            "end_at": "2016-09-01T09:30:00+08:00"
            },
          "course_id": 1,
          "course_subject": "Surprised by Joy",
          "course_type": "required",
          "attendance": false,
          "teacher": {
            "id": 5,
            "avatar": "https://cdn.com/1.png",
            "name": "于熠彤"
            }
        },
        {
          "sequence": 2,
          "current": false,
          "course_time": {
            "start_at": "2016-09-01T10:00:00+08:00",
            "end_at": "2016-09-01T10:30:00+08:00",
            "start_time": "10:00",
            "end_time": "10:30"
            },
          "attendance_time": {
            "start_at": "2016-09-01T09:45:00+08:00",
            "end_at": "2016-09-01T10:30:00+08:00"
            },
          "course_id": 2,
          "course_subject": "Sleep the Brave",
          "course_type": "required",
          "attendance": false,
          "teacher": {
            "id": 6,
            "avatar": "https://cdn.com/2.png",
            "name": "范浩宇"
            }
        },
        {
          "sequence": 3,
          "current": false,
          "course_time": {
            "start_at": "2016-09-01T13:00:00+08:00",
            "end_at": "2016-09-01T13:30:00+08:00",
            "start_time": "13:00",
            "end_time": "13:30"
            },
          "attendance_time": {
            "start_at": "2016-09-01T12:45:00+08:00",
            "end_at": "2016-09-01T13:30:00+08:00"
            },
          "course_id": 3,
          "course_subject": "Sleep the Brave",
          "course_type": "elective",
          "attendance": true,
          "teacher": {
            "id": 5, "avatar": "https://cdn.com/1.png",
            "name": "于熠彤"
            }
          },
          {
            "sequence": 4,
            "current": false,
            "course_time": {
              "start_at": "2016-09-01T14:00:00+08:00",
              "end_at": "2016-09-01T14:30:00+08:00",
              "start_time": "14:00",
              "end_time": "14:30"
              },
            "attendance_time": {
              "start_at": "2016-09-01T13:45:00+08:00",
              "end_at": "2016-09-01T14:30:00+08:00"
              },
            "course_id": nil,
            "course_subject": nil,
            "course_type": nil,
            "attendance": false,
            "teacher": {
              "id": nil,
              "avatar": nil,
              "name": nil
            }
          }
        ]
  }
]

```
