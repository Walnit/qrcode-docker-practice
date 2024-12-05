import io
import qrcode

from fastapi import FastAPI, Response
from pydantic import BaseModel


class QRCodeData(BaseModel):
    value: str
    bg_color: str | None = "white"
    fg_color: str | None = "black"

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/qr")
def generate_qr(data: QRCodeData):
    # Generate the QR Code
    qr = qrcode.QRCode()
    qr.add_data(data.value)
    qr.make(fit=True)
    img = qr.make_image(fill_color=data.fg_color, back_color=data.bg_color)

    # Convert the image to bytes
    img_bytes = io.BytesIO()
    img.save(img_bytes, format="PNG")

    return Response(content=img_bytes.getvalue(), media_type="image/png")
