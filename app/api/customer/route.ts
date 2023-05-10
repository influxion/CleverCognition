import { NextRequest } from "next/server";

export async function POST(req: NextRequest): Promise<Response> {
    const input = await req.json();
  
    for (const key in input) {
        if(typeof input[key] !== Boolean && !input[key]) {

            return NextResponse.json({ error: `Missing ${key}` }, { status: 400 });
        }
    }
    if (const key in user) {
    }
    try {
      await removeFromCart(cartId, [lineId]);
      return NextResponse.json({ status: 204 });
    } catch (e) {
      if (isShopifyError(e)) {
        return NextResponse.json({ message: formatErrorMessage(e.message) }, { status: e.status });
      }
  
      return NextResponse.json({ status: 500 });
    }
  }
  