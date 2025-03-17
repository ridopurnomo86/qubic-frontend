import jwt from "jsonwebtoken";
import type {
  JsonWebTokenError,
  Jwt,
  JwtPayload,
  VerifyOptions,
} from "jsonwebtoken";

type verifyParamsType = {
  token: string;
  secret: string;
  options?: VerifyOptions;
};

type ResponseVerifyInfoType = {
  isValid?: boolean;
  isExpired?: boolean;
  payload?: {
    id?: number;
    email?: string;
    name?: string;
    iat?: number;
    exp?: number;
  };
};

export const generateToken = ({
  id,
  data,
}: {
  id: number;
  data: { [key: string]: string | number };
}) =>
  jwt.sign({ id, ...data }, process.env.JWT_SECRET_KEY as string, {
    expiresIn: "5h",
  });

export const verify = ({
  token,
  secret,
  options,
}: verifyParamsType): Promise<{
  err?: JsonWebTokenError;
  payload?: string | JwtPayload | Jwt | undefined;
}> =>
  new Promise((resolve) => {
    jwt.verify(token, secret, options, (err, payload) => {
      if (err) return resolve({ err });
      return resolve({ payload });
    });
  });

export const verifyWithInfo = async ({
  token,
  secret,
  options,
}: verifyParamsType): Promise<ResponseVerifyInfoType> => {
  const { err, payload } = await verify({
    token,
    secret,
    options,
  });

  if (!err) return { isValid: true, payload: payload as JwtPayload };
  if (err.name === "TokenExpiredError")
    return { isValid: false, isExpired: true };
  return { isValid: false };
};
