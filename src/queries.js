import { gql } from 'apollo-boost'

export const LATEST_BLOCK_QUERY = gql`
  query LATEST_BLOCK_QUERY {
    block {
      number
      hash
      parent {
        hash
      }
      transactionCount
      transactions {
        index
        hash
        value
        from {
          address
        }
        to {
          address
        }
        status
        gasUsed
      }
    }
  }
`

export const BLOCK_RANGE_QUERY = gql`
  query BLOCK_RANGE_QUERY($blockNumberLower: Long!, $blockNumberUpper: Long) {
    blocks(from: $blockNumberLower, to: $blockNumberUpper) {
      number
      hash
      parent {
        hash
      }
      transactionCount
      transactions {
        index
        hash
        value
        from {
          address
        }
        to {
          address
        }
        status
        gasUsed
      }
    }
  }
`
