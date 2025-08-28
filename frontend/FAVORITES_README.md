# Favorite Dishes Page

## Mô tả
Trang Favorite Dishes hiển thị danh sách các món ăn yêu thích của người dùng với giao diện đẹp và hiện đại.

## Tính năng
- **Grid Layout**: Hiển thị các món ăn yêu thích trong layout 2 cột
- **FavoriteDishCard**: Component card riêng biệt cho từng món ăn yêu thích
- **Interactive Buttons**: 
  - Heart icon (filled) để bỏ yêu thích
  - X icon để xóa món ăn khỏi danh sách
- **Responsive Design**: Giao diện thích ứng với các kích thước màn hình
- **Navigation**: Có thể truy cập từ sidebar navigation

## Cấu trúc Files

### Components
- `src/components/Foodcards/FavoriteDishCard.tsx` - Component card cho món ăn yêu thích
- `src/components/Sidebar.tsx` - Sidebar navigation với link đến trang favorites

### Pages
- `src/app/favorites/page.tsx` - Trang Favorite Dishes chính

### Data
- `src/data/mockData.ts` - Dữ liệu mẫu cho các món ăn yêu thích

## Cách sử dụng

### Truy cập trang
1. Mở ứng dụng
2. Click vào "Favorite Dishes" trong sidebar navigation
3. Hoặc truy cập trực tiếp URL: `/favorites`

### Tương tác
- **Bỏ yêu thích**: Click vào heart icon (filled) để bỏ món ăn khỏi danh sách yêu thích
- **Xóa món ăn**: Click vào X icon để xóa hoàn toàn món ăn khỏi danh sách

## Styling
- Sử dụng Tailwind CSS
- Màu sắc theo theme Korofu
- Shadow effects và border styling nhất quán
- Font Quicksand cho text mô tả

## Dữ liệu mẫu
Trang hiển thị 6 món ăn yêu thích mẫu:
1. Pasta
2. Beef Noodles  
3. Grilled Sausages
4. Hamburger
5. French Fries
6. Fried Chicken

## Tương lai
- Thêm tính năng tìm kiếm và lọc
- Thêm pagination cho danh sách dài
- Tích hợp với backend để lưu trữ dữ liệu thực
- Thêm animation khi thêm/xóa món ăn
