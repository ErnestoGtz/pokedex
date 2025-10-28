import { IsNumber, IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {
    
    @Min(1)
    @IsPositive()
    @IsOptional()
    @IsNumber()
    limit?:number;

    @IsOptional()
    @IsPositive()
    @IsNumber()
    offset?:number;
}