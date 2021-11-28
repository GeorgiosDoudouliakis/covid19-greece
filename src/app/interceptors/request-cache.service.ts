import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

const maxAge = 30000;
@Injectable({
  providedIn: 'root'
})
export class RequestCache  {
  private cache = new Map();

  get(req: HttpRequest<any>): HttpResponse<any> | undefined {
    const url = req.urlWithParams;
    const cached = this.cache.get(url);

    if (!cached) {
      return undefined;
    }

    const isExpired = cached.lastRead < (Date.now() - maxAge);
    const expired = isExpired ? 'expired ' : '';
    return cached.response;
  }

  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.url;
    const cacheEntry = { url, response, lastRead: Date.now() };
    this.cache.set(url, cacheEntry);

    const expired = Date.now() - maxAge;
    this.cache.forEach(cachedEntry => {
      if (cachedEntry.lastRead < expired) {
        this.cache.delete(cachedEntry.url);
      }
    });
  }
}