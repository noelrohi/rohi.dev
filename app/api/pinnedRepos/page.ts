import { me } from '@/config/site';
import { NextResponse } from 'next/server'

export const runtime = "nodejs"

export default async function GET() {
    const url = `https://gh-pinned-repos.egoist.dev/?username=${me.tag}`;
    const res = await fetch(url)
    const data = await res.json()

    return NextResponse.json(data)
}               