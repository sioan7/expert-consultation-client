import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { IComment, Page } from '../models';

@Injectable()
export class CommentsApiService {
  constructor(private http: HttpClient) {
  }

  public list(nodeId: string): Observable<Page<IComment>> {
    return this.http.get<Page<IComment>>(this.commentUrl(nodeId));
  }

  public save(nodeId: string, text: string): Observable<IComment> {
    return this.http.post<IComment>(this.commentUrl(nodeId), {text});
  }

  public listReplies(nodeId: string, commentId: string): Observable<Page<IComment>> {
    return this.http.get<Page<IComment>>(this.repliesUrl(nodeId, commentId));
  }

  public saveReply(nodeId: string, commentId: string, text: string): Observable<IComment> {
    return this.http.post<IComment>(this.repliesUrl(nodeId, commentId), {text});
  }

  private repliesUrl(nodeId: string, commentId: string): string {
    return `${this.commentUrl(nodeId)}/${commentId}/replies`;
  }

  private commentUrl(nodeId: string) {
    return `${environment.api_url}/documentnodes/${nodeId}/comments`;
  }
}
