"use client";
import useSWR from "swr";

export default function ChonCoSo() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error, isLoading } = useSWR('http://localhost:3000/benhvien', fetcher);
    if (error) return <strong>Lỗi...</strong>
    if (isLoading) return <strong>Lỗi load...</strong>
    return (
        <>
            {data.map((n) => (
                <li>
                    <label for="#" class="bs-flex">
                        <input type="checkbox" class="bs-hospitals-items" />
                        {n.ten}
                    </label>
                </li>
            ))}

        </>
    )
}