# Introduction

level과 department, parent department를 기준으로 작성된 데이터를 Tree Structure로 파싱하는 프로그램입니다.

# Usage

Try to insert data called `dummy.json` as follows. the data is placed in the `src/res` directory.

```json
{
  "data": [
    {
      "departmentName": "대표",
      "level": 1,
      "parentDepartment": null,
      "regDate": "2020-01-01 00:00:00",
      "modDate": "2020-01-01 00:00:00",
      "modUser": "admin",
      "managerName": "김철수"
    },
    {
      "departmentName": "관리부",
      "level": 2,
      "parentDepartment": "대표",
      "regDate": "2020-01-01 00:00:00",
      "modDate": "2020-01-01 00:00:00",
      "modUser": "admin",
      "managerName": "김철수"
    },
    {
      "departmentName": "영업부",
      "level": 2,
      "parentDepartment": "대표",
      "regDate": "2020-01-01 00:00:00",
      "modDate": "2020-01-01 00:00:00",
      "modUser": "admin",
      "managerName": "김철수"
    },
    {
      "departmentName": "개발부",
      "level": 2,
      "parentDepartment": "대표",
      "regDate": "2020-01-01 00:00:00",
      "modDate": "2020-01-01 00:00:00",
      "modUser": "admin",
      "managerName": "김철수"
    },
    {
      "departmentName": "인사부",
      "level": 2,
      "parentDepartment": "대표",
      "regDate": "2020-01-01 00:00:00",
      "modDate": "2020-01-01 00:00:00",
      "modUser": "admin",
      "managerName": "김철수"
    },
    {
      "departmentName": "총무부",
      "level": 2,
      "parentDepartment": "대표",
      "regDate": "2020-01-01 00:00:00",
      "modDate": "2020-01-01 00:00:00",
      "modUser": "admin",
      "managerName": "김철수"
    },
    {
      "departmentName": "경리부",
      "level": 2,
      "parentDepartment": "대표",
      "regDate": "2020-01-01 00:00:00",
      "modDate": "2020-01-01 00:00:00",
      "modUser": "admin",
      "managerName": "김철수"
    },
    {
      "departmentName": "영업1팀",
      "level": 3,
      "parentDepartment": "영업부",
      "regDate": "2020-01-01 00:00:00",
      "modDate": "2020-01-01 00:00:00",
      "modUser": "admin",
      "managerName": "김철수"
    },
    {
      "departmentName": "영업2팀",
      "level": 3,
      "parentDepartment": "영업부",
      "regDate": "2020-01-01 00:00:00",
      "modDate": "2020-01-01 00:00:00",
      "modUser": "admin",
      "managerName": "김철수"
    },
    {
      "departmentName": "영업3팀",
      "level": 3,
      "parentDepartment": "영업부",
      "regDate": "2020-01-01 00:00:00",
      "modDate": "2020-01-01 00:00:00",
      "modUser": "admin",
      "managerName": "김철수"
    },
    {
      "departmentName": "영업4팀",
      "level": 3,
      "parentDepartment": "영업부",
      "regDate": "2020-01-01 00:00:00",
      "modDate": "2020-01-01 00:00:00",
      "modUser": "admin",
      "managerName": "김철수"
    },
    {
      "departmentName": "영업5팀",
      "level": 3,
      "parentDepartment": "영업부",
      "regDate": "2020-01-01 00:00:00",
      "modDate": "2020-01-01 00:00:00",
      "modUser": "admin",
      "managerName": "김철수"
    },
    {
      "departmentName": "영업6팀",
      "level": 3,
      "parentDepartment": "영업부",
      "regDate": "2020-01-01 00:00:00",
      "modDate": "2020-01-01 00:00:00",
      "modUser": "admin",
      "managerName": "김철수"
    }
  ]
}
```

이렇게 하면 아래와 같이 출력됩니다.

```json
[
  {
    "departmentName": "대표",
    "level": 1,
    "parentDepartment": null,
    "regDate": "2020-01-01 00:00:00",
    "modDate": "2020-01-01 00:00:00",
    "modUser": "admin",
    "managerName": "김철수",
    "children": [
      {
        "departmentName": "관리부",
        "level": 2,
        "parentDepartment": "대표",
        "regDate": "2020-01-01 00:00:00",
        "modDate": "2020-01-01 00:00:00",
        "modUser": "admin",
        "managerName": "김철수",
        "children": []
      },
      {
        "departmentName": "영업부",
        "level": 2,
        "parentDepartment": "대표",
        "regDate": "2020-01-01 00:00:00",
        "modDate": "2020-01-01 00:00:00",
        "modUser": "admin",
        "managerName": "김철수",
        "children": [
          {
            "departmentName": "영업1팀",
            "level": 3,
            "parentDepartment": "영업부",
            "regDate": "2020-01-01 00:00:00",
            "modDate": "2020-01-01 00:00:00",
            "modUser": "admin",
            "managerName": "김철수",
            "children": []
          },
          {
            "departmentName": "영업2팀",
            "level": 3,
            "parentDepartment": "영업부",
            "regDate": "2020-01-01 00:00:00",
            "modDate": "2020-01-01 00:00:00",
            "modUser": "admin",
            "managerName": "김철수",
            "children": []
          },
          {
            "departmentName": "영업3팀",
            "level": 3,
            "parentDepartment": "영업부",
            "regDate": "2020-01-01 00:00:00",
            "modDate": "2020-01-01 00:00:00",
            "modUser": "admin",
            "managerName": "김철수",
            "children": []
          },
          {
            "departmentName": "영업4팀",
            "level": 3,
            "parentDepartment": "영업부",
            "regDate": "2020-01-01 00:00:00",
            "modDate": "2020-01-01 00:00:00",
            "modUser": "admin",
            "managerName": "김철수",
            "children": []
          },
          {
            "departmentName": "영업5팀",
            "level": 3,
            "parentDepartment": "영업부",
            "regDate": "2020-01-01 00:00:00",
            "modDate": "2020-01-01 00:00:00",
            "modUser": "admin",
            "managerName": "김철수",
            "children": []
          },
          {
            "departmentName": "영업6팀",
            "level": 3,
            "parentDepartment": "영업부",
            "regDate": "2020-01-01 00:00:00",
            "modDate": "2020-01-01 00:00:00",
            "modUser": "admin",
            "managerName": "김철수",
            "children": []
          }
        ]
      },
      {
        "departmentName": "개발부",
        "level": 2,
        "parentDepartment": "대표",
        "regDate": "2020-01-01 00:00:00",
        "modDate": "2020-01-01 00:00:00",
        "modUser": "admin",
        "managerName": "김철수",
        "children": []
      },
      {
        "departmentName": "인사부",
        "level": 2,
        "parentDepartment": "대표",
        "regDate": "2020-01-01 00:00:00",
        "modDate": "2020-01-01 00:00:00",
        "modUser": "admin",
        "managerName": "김철수",
        "children": []
      },
      {
        "departmentName": "총무부",
        "level": 2,
        "parentDepartment": "대표",
        "regDate": "2020-01-01 00:00:00",
        "modDate": "2020-01-01 00:00:00",
        "modUser": "admin",
        "managerName": "김철수",
        "children": []
      },
      {
        "departmentName": "경리부",
        "level": 2,
        "parentDepartment": "대표",
        "regDate": "2020-01-01 00:00:00",
        "modDate": "2020-01-01 00:00:00",
        "modUser": "admin",
        "managerName": "김철수",
        "children": []
      }
    ]
  }
]
```
