# React Shop

Một ứng dụng cửa hàng sản phẩm đơn giản được xây dựng bằng React và Vite.

---

## Mục tiêu dự án
Dự án này minh họa cách:
- Xây dựng giao diện cửa hàng sản phẩm bằng React.
- Sử dụng các component tách biệt (ProductList, Cart, v.v.).
- Quản lý trạng thái sản phẩm và giỏ hàng.
- Triển khai ứng dụng front-end trên GitHub Pages.

---

## Tính năng chính
- Hiển thị danh sách sản phẩm.
- Thêm sản phẩm vào giỏ hàng.
- Cập nhật số lượng sản phẩm trong giỏ.
- Tính tổng tiền trong giỏ.
- Giao diện tối giản, dễ sử dụng trên cả desktop và mobile.

---

## Công nghệ sử dụng
- React 18.x
- Vite (bundler tối ưu và nhanh)
- CSS thuần cho style đơn giản
- gh-pages để deploy GitHub Pages

---

## Hướng dẫn cài đặt
1. Clone repo:
   ```bash
   git clone https://github.com/huynhtoan1413/react-shop.git
   cd react-shop
   ```
2. Cài đặt các thư viện:
   ```bash
   npm install
   ```
3. Chạy ứng dụng ở môi trường dev:
   ```bash
   npm run dev
   ```
4. Mở trình duyệt và truy cập:
   ```
   http://localhost:5173/
   ```

---

## Triển khai GitHub Pages
1. Trong `package.json`, thêm:
   ```json
   "homepage": "https://huynhtoan1413.github.io/react-shop"
   ```
2. Cài gh-pages:
   ```bash
   npm install gh-pages --save-dev
   ```
3. Thêm scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Chạy deploy:
   ```bash
   npm run deploy
   ```
5. Xem trang tại:
   ```
   https://huynhtoan1413.github.io/react-shop
   ```

---

## Giấy phép
Dự án này được phát hành dưới giấy phép MIT.
Bạn có thể tự do sao chép, chỉnh sửa và sử dụng lại trong các dự án cá nhân hoặc thương mại.

---

## Liên hệ
Nếu bạn cần hỗ trợ hoặc có câu hỏi:
- GitHub: [https://github.com/huynhtoan1413](https://github.com/huynhtoan1413)
- Email: huynhnntoan@gmail.com
