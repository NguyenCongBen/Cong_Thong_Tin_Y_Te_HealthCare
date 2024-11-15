"use client";
import useSWR from "swr";

export default function ChuyenMon() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error, isLoading } = useSWR('http://localhost:3000/chuyenkhoa', fetcher);
    if (error) return <strong>Lỗi...</strong>
    if (isLoading) return <strong>Lỗi load...</strong>
    return (
        <>
            {data.map((c) => (
                <li>
                    <label for="#" class="bs-flex">
                        <input type="checkbox" class="bs-hospitals-items" />
                        {c.ten_chuyen_khoa}
                    </label>
                </li>
            ))}

        </>
    )
}