import { HTTPBaseService } from '@/utils/request';
import type { CreationParams, CreationResponse, ListResponse, AdminResponse, UpdateParams, QueryProductParams } from '@/types/product'

class Product extends HTTPBaseService {
  public constructor() {
    super();
  }

  async list(params?: QueryProductParams): Promise<ListResponse> {
    return (await this.instance.get('/products', { params })).data
  }

  async detail(id: number): Promise<AdminResponse> {
    return (await this.instance.get(`/products/${id}`)).data
  }

  async create(params: CreationParams): Promise<CreationResponse> {
    return (await this.instance.post('/products', params)).data
  }

  async update(id: number, params: UpdateParams): Promise<AdminResponse> {
    return (await this.instance.put(`/products/${id}`, params)).data
  }

  delete(id: number): void {
    this.instance.delete(`/products/${id}`)
  }

  deleteAll(ids: number[]): void {
    this.instance.delete(`/products/${ids.join(',')}`)
  }
}

export default Product;
