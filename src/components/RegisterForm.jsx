import { useState } from 'react'

// ต่อจาก RegisterForm.jsx ที่เขียนร่วมกันตอนเช้า (บล็อก 2.5) — มี name/email/age และ validate() พื้นฐานแล้ว
// TODO B1: เพิ่มฟิลด์ phone เข้า form state (object เดียว — ห้ามแยก useState ทีละฟิลด์)
// TODO B1: validate phone — ตัวเลข 10 หลัก ขึ้นต้นด้วย 0 เท่านั้น
// TODO B1: เข้มงวด validate email ขึ้น — ต้องมีตัวอักษรอย่างน้อย 1 ตัวหลัง @ ด้วย ไม่ใช่แค่ includes("@")
// TODO B2: ปุ่ม submit ตั้ง disabled เมื่อมี error ค้างอยู่ในฟอร์ม
// TODO B2: กรอกถูกทุกช่องแล้ว submit → แสดงข้อความสำเร็จบนหน้าจอ (ไม่ใช่แค่ console.log)

function RegisterForm() {
  const [form, setForm] = useState({ name: "", email: "", age: "", phone: "" })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const updateField = (field, value) => {
    setForm({ ...form, [field]: value })
    setErrors({ ...errors, [field]: undefined })
    setIsSubmitted(false)
  }

  const validate = () => {
    const newErrors = {}
    if (form.name.trim() === "") newErrors.name = "กรุณากรอกชื่อ"
    if (!/^[^@\s]+@[^@\s]+$/.test(form.email)) newErrors.email = "อีเมลไม่ถูกต้อง"
    const ageNum = Number(form.age)
    if (!/^\d+$/.test(form.age) || ageNum < 18 || ageNum > 100) {
      newErrors.age = "อายุต้องอยู่ระหว่าง 18–100"
    }
    if (!/^0\d{9}$/.test(form.phone)) newErrors.phone = "เบอร์โทรต้องเป็นตัวเลข 10 หลัก และขึ้นต้นด้วย 0"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      console.log("สมัครสำเร็จ:", form)
      setIsSubmitted(true)
    }
  }

  return (
    <section className="mx-auto w-full max-w-[560px] px-8 py-10 text-slate-900">
      <p className="mb-2.5 text-center text-[13px] font-bold uppercase tracking-[0.08em] text-slate-500">Mockup · Lab Day 2</p>
      <h1 className="mb-1.5 text-center text-2xl font-extrabold">สมัครสมาชิก</h1>
      <p className="mb-7 text-center text-sm leading-6 text-slate-500">ฟิลด์ทั้งหมด controlled + validate เอง — error ใต้ช่องที่ผิด, submit ต้องถูกกันจริงใน handleSubmit</p>

      <form className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.08)]" onSubmit={handleSubmit}>
        <h2 className="mb-[18px] text-[19px] font-bold">สมัครสมาชิก</h2>

        <label className="mb-[14px] block">
          <span className="mb-1 block text-[13px] text-slate-600">ชื่อ</span>
          <input value={form.name} onChange={e => updateField("name", e.target.value)}
            className={`w-full rounded-lg border px-3 py-[9px] text-[15px] text-slate-900 outline-none ${errors.name ? "border-red-600" : "border-slate-300"}`} />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </label>

        <label className="mb-[14px] block">
          <span className="mb-1 block text-[13px] text-slate-600">อีเมล</span>
          <input value={form.email} onChange={e => updateField("email", e.target.value)}
            className={`w-full rounded-lg border px-3 py-[9px] text-[15px] text-slate-900 outline-none ${errors.email ? "border-red-600" : "border-slate-300"}`} />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </label>

        <label className="mb-[14px] block">
          <span className="mb-1 block text-[13px] text-slate-600">อายุ</span>
          <input value={form.age} onChange={e => updateField("age", e.target.value)} inputMode="numeric"
            className={`w-full rounded-lg border px-3 py-[9px] text-[15px] text-slate-900 outline-none ${errors.age ? "border-red-600" : "border-slate-300"}`} />
          {errors.age && <p className="mt-1 text-xs text-red-600">{errors.age}</p>}
        </label>

        {/* TODO B1: เพิ่ม input เบอร์โทร ผูกกับ form.phone + errors.phone ตรงนี้ */}
        <label className="mb-[14px] block">
          <span className="mb-1 block text-[13px] text-slate-600">เบอร์โทร</span>
          <input value={form.phone} onChange={e => updateField("phone", e.target.value)} inputMode="numeric"
            className={`w-full rounded-lg border px-3 py-[9px] text-[15px] text-slate-900 outline-none ${errors.phone ? "border-red-600" : "border-slate-300"}`} />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </label>

        <button type="submit" disabled={Object.values(errors).some(Boolean)} className="mt-1.5 w-full rounded-lg bg-blue-600 py-2.5 text-[15px] font-bold text-white disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500">
          สมัคร
        </button>
        {isSubmitted && <p className="mt-3.5 text-center text-[13px] font-semibold text-green-600">สมัครสมาชิกสำเร็จ</p>}
      </form>
      <p className="mt-6 text-center text-xs text-slate-400">มี error ค้างอยู่ 1 ช่องขึ้นไป → ปุ่มต้อง disabled และ submit ต้องไม่ผ่านแม้ปิด JS/DevTools</p>
    </section>
  )
}

export default RegisterForm
