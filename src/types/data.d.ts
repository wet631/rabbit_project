// 所有接口的通用格式
export interface ApiRes<T> {
  code: string;
  msg: string;
  result: T;
}

// 商品的类型
export interface GoodsItem {
  desc: string;
  id: string; 
  name: string;
  picture: string;
  price: string;
}

// 单个分类的类型
export interface CategoryItem {
  id: string;
  name: string;
  picture: string;
  children: CategoryItem[];
  goods:GoodsItem[]
  open: boolean;
}

// 轮播图类型
export type BannerItem = {
  hrefUrl: string
  id: string
  imgUrl: string
  type: string
}