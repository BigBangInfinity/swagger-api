import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { MintNFTSDto } from './dtos/mintNFTS.dto';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('contract-address')
  getContractAddress() {
    return { result: this.appService.getContractAddress() };
  }

  @Get('token-name')
  async getTokenName() {
    return { result: await this.appService.getTokenName() };
  }

  @Get('server-wallet-address')
  getServerWalletAddress() {
    return {
      result: this.appService.getServerWalletAddress()
    };
  }

  @Get('check-minter-role')
  async checkMinterRole(@Query('address') address: string) {
    return { result: await this.appService.checkMinterRole(address) };
  }

  @Post('mint-nfts')
  async mintNFTS(@Body() body: MintNFTSDto) {
    const result = await this.appService.mintNFTS(body.address);
    return { result };
  }

  // @Post('mint-nfts')
  // async mintNFTS(@Body() body: MintNFTSDto) {
  //   const result = await this.appService.mintNFTS(body.signature, body.address);
  //   return { result };
  // }
}
