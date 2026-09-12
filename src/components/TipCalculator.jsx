import { useState } from 'react'

function TipCalculator() {
  const [bill, setBill] = useState("")
  const [tipPercent, setTipPercent] = useState(10)
  const [people, setPeople] = useState(1)

  const billNumber = Number(bill) || 0
  // TODO 2: คำนวณ tip, total, perPerson สดตอน render — ห้ามเป็น useState
  const peopleNumber = Number(people) || 0
  const tip = billNumber * (tipPercent / 100)
  const total = billNumber + tip
  const perPerson = peopleNumber > 0 ? total / peopleNumber : 0


  // TODO 3: ปุ่มลัด % ทิป ด้วย .map() (ไม่ใช่เขียนปุ่มแยกทีละอัน)
  // TODO 4: ปุ่มรีเซ็ตคืนค่าทุกช่องพร้อมกัน
  const handleReset = () => {
    setBill("")
    setTipPercent(10)
    setPeople(1)
  }


  return (
    <section className="max-w-md mx-auto my-12 p-6 border rounded-lg bg-white">
      <h2 className="text-xl font-bold mb-4">คำนวณทิป</h2>
      {/* TODO: input ยอดบิล / ปุ่มลัด %ทิป / input จำนวนคน / ผลลัพธ์ / ปุ่มรีเซ็ต */}
      <label className="block mb-4">
        <p className="mb-2">ยอดบิล (บาท)</p>

        <input
          type="number"
          min="0"
          value={bill}
          onChange={(event) => setBill(event.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </label>

      <div className='mb-4'>
        <p className='mb-2'>เปอร์เซ็นทิป: {tipPercent} %</p>

        {[10, 15, 20].map(percent => (
          <button
            key={percent}
            type="button"
            onClick={() => setTipPercent(percent)}
            className="border rounded px-3 py-2"
          >{percent} % </button>
        ))}

        <div className="block my-4">
          <p className="mb-2">จำนวนคน</p>
          <input
            type="number"
            min="0"
            value={people}
            onChange={(event) => setPeople(event.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="border-t pt-4 mb-4">
          <p>ทิป: {tip.toFixed(2)} บาท</p>
          <p>ยอดรวม: {total.toFixed(2)} บาท</p>
          <p className="font-bold">
            คนละ: {perPerson.toFixed(2)} บาท
          </p>
        </div>

        <button
          type='button'
          onClick={handleReset}
          className="w-full border rounded px-3 py-2"
        >รีเซ็ต</button>

      </div>
    </section>
  )
}
export default TipCalculator
