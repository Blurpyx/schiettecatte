'use client'
import { useRouter } from 'next/navigation'

export default function DropdownMenu() {
  const router = useRouter();
  return (
    <div className="absolute w-[20ch] -left-16 pt-[.81rem]">
      <ul className="bg-red flex flex-col items-center">
        <li value="on-road" className="on-road cursor-pointer p-2 hover:font-bold" onClick={() => router.push('/bikes')}>On-Road24</li>
        <div className="bg-platinum w-[10ch] h-[1px]"></div>
        <li value="off-road" className="off-road cursor-pointer p-2 hover:font-bold" onClick={() => router.push('/bikes')}>Off-Road</li>
        <div className="bg-platinum w-[8ch] h-[1px]"></div>
        <li value="quads" className="quads cursor-pointer p-2 hover:font-bold" onClick={() => router.push('/bikes')}>Quads</li>
        <div className="bg-platinum w-[6ch] h-[1px]"></div>
        <li value="scooters" className="scooters cursor-pointer p-2 hover:font-bold" onClick={() => router.push('/bikes')}>Scooters</li>
        <div className="bg-platinum w-[8ch] h-[1px] mb-2"></div>
      </ul>
    </div>
  );
}