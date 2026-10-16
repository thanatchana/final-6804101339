# สรุปผลการทดสอบ (Test Execution Summary)

**ระบบที่ทดสอบ:** SauceDemo (https://www.saucedemo.com/)

---

## สรุปภาพรวมผลการทดสอบ

| ผลการทดสอบ | จำนวน (Test Cases) |
| :--- | :---: |
| **ผ่าน (Passed)** | 8 |
| **ไม่ผ่าน (Failed)** | 0 |
| **รวมทั้งหมด** | **8** |

*(หมายเหตุ: ข้อ UT-01 มี 3 Test Cases ย่อย รวมกับข้ออื่นๆ รวมเป็น 8 Test Cases)*

---

## รายละเอียดผลการทดสอบแยกตามบทเรียน

### บทที่ 1: Unit Testing / UI Component Testing
* **UT-01.1:** empty username and password — **PASSED**
* **UT-01.2:** missing password — **PASSED**
* **UT-01.3:** invalid login details — **PASSED**
* **UT-02:** product button state Add to cart -> Remove -> Add to cart — **PASSED**

### บทที่ 2: Integration Testing
* **IT-01:** top-down REAL Login -> browser-level Inventory STUB — **PASSED**
* **IT-02:** DRIVER login state -> REAL Inventory and Cart — **PASSED**

### บทที่ 3: System Testing
* **ST-01:** complete purchase of two products — **PASSED**
* **ST-02:** checkout validation and recovery — **PASSED**

---

## ไฟล์รายงานฉบับเต็ม
* **HTML Report:** `playwright-report/index.html`
* **JSON Report:** `reports/results.json`