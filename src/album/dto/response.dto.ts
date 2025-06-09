import { ApiProperty } from '@nestjs/swagger';

export class AlbumResponseDto {
  @ApiProperty({
    example: '0a35dd62-e09f-444b-a628-f4e7c6954f57',
    description: 'UUID',
  })
  id: string;

  @ApiProperty({
    example: 'The best album',
    description: 'Name of the album',
  })
  name: string;

  @ApiProperty({
    example: 1231,
    description: 'When released',
  })
  year: number;

  @ApiProperty({
    example: '0a35dd62-e09f-444b-a628-f4e7c6954f57',
    description: 'UUID of the artist',
  })
  artistId: string;
}
