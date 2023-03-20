import { HTTPBaseService } from '@/utils/request';
import type { CreationParams, CreationResponse, ListResponse, AdminResponse, UpdateParams, QueryProductParams } from '@/types/product'

class Product extends HTTPBaseService {
  public constructor() {
    super();
  }

  async list(params?: QueryProductParams): Promise<ListResponse> {
    return (await this.instance.get('/products', { params })).data
  }

  async detail(id: number, columns?: string[]): Promise<AdminResponse> {
    return (await this.instance.get(`/admins/${id}`, { params: { columns } })).data
  }

  async store(params: CreationParams): Promise<CreationResponse> {
    return (await this.instance.post('/admins', params)).data
  }

  async update(id: number, params: UpdateParams): Promise<AdminResponse> {
    return (await this.instance.put(`/admins/${id}`, params)).data
  }

  delete(id: number): void {
    this.instance.delete(`/admins/${id}`)
  }

  deleteAll(ids: number[]): void {
    this.instance.delete(`/admins/${ids.join(',')}`)
  }
}
