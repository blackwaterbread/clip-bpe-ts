declare class Tokenizer {
    byteEncoder: {
        [k: number]: string;
    };
    byteDecoder: {
        [k: string]: string;
    };
    encoder: any;
    decoder: any;
    bpeRanks: any;
    cache: any;
    pat: RegExp;
    constructor();
    bpe(token: string): string;
    encode(text: string): number[];
    encodeForCLIP(text: string): number[];
    decode(tokens: string[]): string;
}
export default Tokenizer;
