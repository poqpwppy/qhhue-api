# qhhue-api
API cung cấp thông tin, dữ liệu của trường THPT Chuyên Quốc Học Huế!

[![qhhue](https://i.imgur.com/VIuNBcd.png=250x250)](https://www.facebook.com/DoantruongQuocHoc)

## Cách setup API chạy local
### Yêu cầu: node + mongodb + express
- Bước 1: Clone repo về máy
- Bước 2: Tải deps bằng npm, yarn hoặc pnpm.
- Bước 3: Tạo file `.env` và nhập `DATABASE_URL=` sau đó là link mongodb
- Bước 4: `npm run devStart` để bắt đầu server dev. ( Nếu bạn muốn test các endpoints thì hãy edit file test sau đó sử dụng `npm run test` ) để chạy
