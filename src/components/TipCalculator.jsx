import { useState } from 'react'

function TipCalculator() {
  const [bill, setBill] = useState("")
  const [tipPercent, setTipPercent] = useState(10)
  const [people, setPeople] = useState(1)

  // TODO 1: แปลง bill (string) เป็นตัวเลขที่ปลอดภัย (กัน NaN)
  // TODO 2: คำนวณ tip, total, perPerson สดตอน render — ห้ามเป็น useState
  // TODO 3: ปุ่มลัด % ทิป ด้วย .map() (ไม่ใช่เขียนปุ่มแยกทีละอัน)
  // TODO 4: ปุ่มรีเซ็ตคืนค่าทุกช่องพร้อมกัน

  return (
    <section className="max-w-md mx-auto my-12 p-6 border rounded-lg bg-white">
      <h2 className="text-xl font-bold mb-4">คำนวณทิป</h2>
      {/* TODO: input ยอดบิล / ปุ่มลัด %ทิป / input จำนวนคน / ผลลัพธ์ / ปุ่มรีเซ็ต */}
    </section>
  )
}
export default TipCalculator
