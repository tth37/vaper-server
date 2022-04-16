import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { DeletePostDto } from "./dto/delete-post.dto";
import { GetPostDetailDto } from "./dto/get-post-detail.dto";
import { GetPostListDto } from "./dto/get-post-list.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { PostService } from "./post.service";

@Controller("post")
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post("createPost")
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.postService.createPost(createPostDto);
  }

  @Post("updatePost")
  updatePost(@Body() updatePostDto: UpdatePostDto) {
    return this.postService.updatePost(updatePostDto);
  }

  @Post("deletePost")
  deletePost(@Body() deletePostDto: DeletePostDto) {
    return this.postService.deletePost(deletePostDto);
  }

  @Get("getPostList")
  getPostList(@Query() getPostListDto: GetPostListDto) {
    return this.postService.getPostList(getPostListDto);
  }

  @Get("getPostDetail")
  getPostDetail(@Query() getPostDetailDto: GetPostDetailDto) {
    return this.postService.getPostDetail(getPostDetailDto);
  }

  @Get("getPostCount")
  getPostCount() {
    return this.postService.getpostCount();
  }
}
