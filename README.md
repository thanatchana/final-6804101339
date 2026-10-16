# รายงานการส่งข้อสอบปลายภาค Software Testing (Playwright)

## ข้อมูลผู้จัดทำ
- **ชื่อ-นามสกุล:** [น.ส. ธนัชชาณา ยะวรรณ]
- **รหัสนักศึกษา:** [6804101339]
- **Repository:** final-[6804101339]
- **ระบบที่ใช้ทดสอบ:** SauceDemo (https://www.saucedemo.com/)

---

## สรุปแนวคิดการทดสอบ Integration Testing

### 1. ข้อ IT-01 (Top-Down Testing ด้วย Stub)
* **ส่วนที่เป็น Real (ระบบจริง):** ใช้การ Login ผ่านหน้าเว็บจริงด้วย Username `standard_user` และ Password `secret_sauce` เพื่อยืนยันว่าระบบล็อกอินได้จริง
* **ส่วนที่เป็น Stub (ระบบจำลอง):** ใช้คำสั่ง `page.setContent()` จำลองหน้าคลังสินค้า (Inventory) บน Browser แทนหน้าจริง โดยโชว์ข้อความ `Mock Inventory Ready` และสินค้าจำลอง 2 ชิ้น เพื่อทดสอบการแสดงผลโดยไม่ต้องพึ่งพา Backend จริง

### 2. ข้อ IT-02 (Bottom-Up Testing ด้วย Driver)
* **บทบาทของ Driver:** ใช้ฟังก์ชัน `driverOpenInventory()` ยัด Cookie เซสชัน (`session-username`) เข้า Browser เพื่อข้ามหน้า Login ไปยังหน้าสินค้าได้ทันที
* **ส่วนที่เป็น Real (ระบบจริง):** เปิดหน้า `inventory.html` จริง ตรวจสอบสินค้าจริง 6 ชิ้น และทดสอบกดเพิ่มสินค้าใส่ Cart จริง

---
