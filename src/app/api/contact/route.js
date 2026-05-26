import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Server-side validation
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // In a real application, you would save this to a database or send an email here.
    // For this demonstration, we'll return a successful response.
    
    return NextResponse.json(
      { message: 'Form submitted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
