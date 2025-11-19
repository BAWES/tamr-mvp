import { NextRequest, NextResponse } from 'next/server'

interface RequestBody {
  name: string
  email?: string
  phone: string
  requestDetails: string
}

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json()

    // Server-side validation
    if (!body.name || !body.name.trim()) {
      return NextResponse.json(
        { success: false, error: 'Name is required.' },
        { status: 400 }
      )
    }

    if (!body.phone || !body.phone.trim()) {
      return NextResponse.json(
        { success: false, error: 'Phone is required.' },
        { status: 400 }
      )
    }

    if (!body.requestDetails || !body.requestDetails.trim()) {
      return NextResponse.json(
        { success: false, error: 'Request details are required.' },
        { status: 400 }
      )
    }

    // Check for Discord webhook URL
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL

    if (!webhookUrl) {
      console.error('DISCORD_WEBHOOK_URL environment variable is not set')
      return NextResponse.json(
        { success: false, error: 'Server configuration error. Please contact support.' },
        { status: 500 }
      )
    }

    // Format Discord message
    const discordMessage = {
      content: `**New Tamr Request**

- Name: ${body.name.trim()}
- Email: ${body.email?.trim() || 'Not provided'}
- Phone: ${body.phone.trim()}
- Request:
\`\`\`
${body.requestDetails.trim()}
\`\`\``,
    }

    // Send to Discord webhook
    const discordResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(discordMessage),
    })

    if (!discordResponse.ok) {
      const errorText = await discordResponse.text()
      console.error('Discord webhook error:', errorText)
      return NextResponse.json(
        { success: false, error: 'Failed to send request. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing request:', error)
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}

