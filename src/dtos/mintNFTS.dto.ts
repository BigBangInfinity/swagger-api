import { ApiProperty } from "@nestjs/swagger";

export class MintNFTSDto {
    @ApiProperty({ type: String, required: true, default: "My Signature" })
    address: string;
    // @ApiProperty({ type: String, required: true, default: "My Address" })
    // address: string;
}
