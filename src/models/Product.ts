import { HTTPBaseService } from "@/utils/request";
import type {
  CreationParams,
  CreationResponse,
  ListResponse,
  ProductItemResponse,
  QueryProductItemParams,
  UpdateParams,
} from "@/types/productItem";

class Product extends HTTPBaseService {
  public constructor() {
    super();
  }

  async list(params: QueryProductItemParams): Promise<ListResponse> {
    return await this.instance.get("/products", { params });
  }

  async detail(id: number): Promise<ProductItemResponse> {
    return await this.instance.get(`/products/${id}`);
  }

  async create(params: CreationParams): Promise<CreationResponse> {
    return await this.instance.post("/products", params);
  }

  async update(id: number, params: UpdateParams): Promise<ProductItemResponse> {
    return await this.instance.put(`/products/${id}`, params);
  }

  async delete(id: number): Promise<void> {
    this.instance.delete(`/products/${id}`);
  }

  deleteAll(ids: number[]): void {
    this.instance.delete(`/products/${ids.join(",")}`);
  }
}

export default Product;
