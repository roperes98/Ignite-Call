import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    // ?title=<title>
    const hasName = searchParams.has('name')
    const name = hasName
      ? searchParams.get('name')?.slice(0, 100)
      : 'User not found'

    const hasImgString = searchParams.has('imgString')
    const imgString = hasImgString
      ? searchParams.get('imgString')?.slice(0, 100)
      : 'user-not-found'

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: '#121214',
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'nowrap',
          }}
        >
          <svg
            width="202"
            height="206"
            viewBox="0 0 202 206"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: 'absolute', top: 0, left: 0 }}
          >
            <rect
              width="95"
              height="95"
              transform="matrix(1 0 0 -1 20 137)"
              fill="#00875F"
              fill-opacity="0.6"
            />
            <rect
              width="95"
              height="95"
              transform="matrix(1 0 0 -1 94 206)"
              fill="#00B37E"
              fill-opacity="0.6"
            />
            <rect
              width="54"
              height="95"
              transform="matrix(1 0 0 -1 0 176)"
              fill="#00B37E"
              fill-opacity="0.6"
            />
            <rect
              width="60"
              height="54"
              transform="matrix(1 0 0 -1 0 54)"
              fill="#00B37E"
              fill-opacity="0.6"
            />
            <rect
              width="120"
              height="66"
              transform="matrix(1 0 0 -1 82 66)"
              fill="#00B37E"
              fill-opacity="0.6"
            />
          </svg>

          <svg
            width="202"
            height="206"
            viewBox="0 0 202 206"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: 'absolute', bottom: 0, left: 0 }}
          >
            <rect
              x="20"
              y="69"
              width="95"
              height="95"
              fill="#00875F"
              fill-opacity="0.6"
            />
            <rect
              x="94"
              width="95"
              height="95"
              fill="#00B37E"
              fill-opacity="0.6"
            />
            <rect
              y="30"
              width="54"
              height="95"
              fill="#00B37E"
              fill-opacity="0.6"
            />
            <rect
              y="152"
              width="60"
              height="54"
              fill="#00B37E"
              fill-opacity="0.6"
            />
            <rect
              x="82"
              y="140"
              width="120"
              height="66"
              fill="#00B37E"
              fill-opacity="0.6"
            />
          </svg>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              alt="Profile"
              height={180}
              src={`https://lh3.googleusercontent.com/a/${imgString}`}
              style={{ borderRadius: '50%' }}
            />
            <div
              style={{
                fontSize: 56,
                fontStyle: 'normal',
                letterSpacing: '-0.025em',
                color: '#E1E1E6',
                padding: '10px 0 7px 0',
                whiteSpace: 'pre-wrap',
              }}
            >
              {name}
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p
                style={{
                  fontSize: 30,
                  fontStyle: 'normal',
                  letterSpacing: '-0.025em',
                  lineHeight: '10%',
                  color: '#E1E1E6',
                  padding: '0',
                  whiteSpace: 'pre-wrap',
                }}
              >
                Faça o seu agendamento
              </p>

              <svg
                stroke="#E1E1E6"
                fill="#E1E1E6"
                stroke-width="0.5"
                viewBox="0 0 16 16"
                height="1.3em"
                width="1.3em"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  marginTop: 6,
                  marginLeft: 7,
                }}
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>
          </div>

          <svg
            width="194"
            height="206"
            viewBox="0 0 194 206"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: 'absolute', top: 0, right: 0 }}
          >
            <rect
              x="182"
              y="137"
              width="95"
              height="95"
              transform="rotate(-180 182 137)"
              fill="#00875F"
              fill-opacity="0.6"
            />
            <rect
              x="108"
              y="206"
              width="95"
              height="95"
              transform="rotate(-180 108 206)"
              fill="#00B37E"
              fill-opacity="0.6"
            />
            <rect
              x="194"
              y="176"
              width="46"
              height="95"
              transform="rotate(-180 194 176)"
              fill="#00B37E"
              fill-opacity="0.6"
            />
            <rect
              x="194"
              y="54"
              width="52"
              height="54"
              transform="rotate(-180 194 54)"
              fill="#00B37E"
              fill-opacity="0.6"
            />
            <rect
              x="120"
              y="66"
              width="120"
              height="66"
              transform="rotate(-180 120 66)"
              fill="#00B37E"
              fill-opacity="0.6"
            />
          </svg>

          <svg
            width="194"
            height="206"
            viewBox="0 0 194 206"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: 'absolute', bottom: 0, right: 0 }}
          >
            <rect
              width="95"
              height="95"
              transform="matrix(-1 0 0 1 182 69)"
              fill="#00875F"
              fill-opacity="0.6"
            />
            <rect
              width="95"
              height="95"
              transform="matrix(-1 0 0 1 108 0)"
              fill="#00B37E"
              fill-opacity="0.6"
            />
            <rect
              width="46"
              height="95"
              transform="matrix(-1 0 0 1 194 30)"
              fill="#00B37E"
              fill-opacity="0.6"
            />
            <rect
              width="52"
              height="54"
              transform="matrix(-1 0 0 1 194 152)"
              fill="#00B37E"
              fill-opacity="0.6"
            />
            <rect
              width="120"
              height="66"
              transform="matrix(-1 0 0 1 120 140)"
              fill="#00B37E"
              fill-opacity="0.6"
            />
          </svg>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
