import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error("⚠️ JWT_SECRET not set");

// ✅ Sign JWT
export function signJwt(
  payload: object,
  expiresIn: string | number = "7d"
): string {
  return jwt.sign(
    payload,
    JWT_SECRET as jwt.Secret,
    {
      expiresIn,
    } as SignOptions
  );
}

// ✅ Verify JWT
export function verifyJwt<T extends JwtPayload>(token: string): T | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET as jwt.Secret) as JwtPayload;
    return decoded as T;
  } catch {
    return null;
  }
}
