import { ApiProperty } from '@nestjs/swagger';

export class ArtistResponseDto {
  @ApiProperty({
    example: '0a35dd62-e09f-444b-a628-f4e7c6954f57',
    description: 'UUID of the artist',
  })
  id: string;

  @ApiProperty({
    example: 'Ivan Sigaev',
    description: 'Name of the artist',
  })
  name: string;

  @ApiProperty({
    example: true,
    description: 'Has won a Grammy',
  })
  grammy: boolean;
}
