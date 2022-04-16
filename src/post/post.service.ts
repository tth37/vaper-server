import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePostDto } from "./dto/create-post.dto";
import { DeletePostDto } from "./dto/delete-post.dto";
import { GetPostDetailDto } from "./dto/get-post-detail.dto";
import { GetPostListDto } from "./dto/get-post-list.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { PostEntity } from "./entities/post.entity";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async createPost(createPostDto: CreatePostDto) {
    const post = this.postRepository.create({
      ...createPostDto,
      date: new Date(),
    });
    return await this.postRepository.save(post);
  }

  async updatePost(updatePostDto: UpdatePostDto) {
    const post = await this.postRepository.findOne({
      where: { id: updatePostDto.id },
    });
    if (!post)
      throw new NotFoundException(`Post with id ${updatePostDto.id} not found`);
    post.title = updatePostDto.title;
    post.abstract = updatePostDto.abstract;
    post.content = updatePostDto.content;
    return await this.postRepository.save(post);
  }

  async deletePost(deletePostDto: DeletePostDto) {
    const post = await this.postRepository.findOne({
      where: { id: deletePostDto.id },
    });
    if (!post)
      throw new NotFoundException(`Post with id ${deletePostDto.id} not found`);
    return await this.postRepository.remove(post);
  }

  async getPostList(getPostListDto: GetPostListDto) {
    const { offset, limit } = getPostListDto;
    return await this.postRepository.find({
      skip: offset,
      take: limit,
      select: ["id", "title", "abstract", "date"],
      order: {
        date: "DESC",
      },
    });
  }

  async getPostDetail(getPostDetailDto: GetPostDetailDto) {
    const post = await this.postRepository.findOne({
      where: { id: getPostDetailDto.id },
      select: ["id", "title", "abstract", "content", "date"],
    });

    if (!post)
      throw new NotFoundException(
        `Post with id ${getPostDetailDto.id} not found`,
      );

    return post;
  }

  async getpostCount() {
    return await this.postRepository.count();
  }
}
