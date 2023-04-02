import { HTTPBaseService } from "@/utils/request";
import type {
  CreationParams,
  CreationResponse,
  ListResponse,
  ProductResponse,
  QueryProductParams,
  UpdateParams,
} from "@/types/product";

class Product extends HTTPBaseService {
  public constructor() {
    super();
  }

  async list(params: QueryProductParams): Promise<ListResponse> {
    return await this.instance.get("/products", { params });
  }

  async detail(id: number): Promise<ProductResponse> {
    return await this.instance.get(`/products/${id}`);
  }

  async create(params: CreationParams): Promise<CreationResponse> {
    return await this.instance.post("/products", params);
  }

  async update(id: number, params: UpdateParams): Promise<ProductResponse> {
    return await this.instance.put(`/products/${id}`, params);
  }

  delete(id: number): void {
    this.instance.delete(`/products/${id}`);
  }

  deleteAll(ids: number[]): void {
    this.instance.delete(`/products/${ids.join(",")}`);
  }
}

export default Product;
